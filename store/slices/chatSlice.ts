// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

// // Interfaces for TypeScript
// interface Provider {
//   ProviderName: string;
//   logo: string;
//   contact: string;
// }

// interface ParsedData {
//   providers: Provider[];
// }

// interface ChatMessage {
//   sender: 'user' | 'bot';
//   content: string;
// }

// interface ChatState {
//   messages: ChatMessage[];
//   loading: boolean;
//   error: string | null;
//   sessionId: string;
//   parsedData: ParsedData | null; // Store parsed JSON data
// }

// interface SendMessagePayload {
//   content: string;
// }

// // Initial state
// const initialState: ChatState = {
//   messages: [],
//   loading: false,
//   error: null,
//   sessionId: uuidv4(),
//   parsedData: null,
// };

// // Function to check if a string is valid JSON
// const isValidJson = (str: string): boolean => {
//   try {
//     JSON.parse(str);
//     return true;
//   } catch {
//     return false;
//   }
// };

// // Async thunk for sending messages and streaming responses
// export const sendChatMessage = createAsyncThunk<
//   void,
//   SendMessagePayload,
//   { state: { chat: ChatState } }
// >('chat/sendMessage', async ({ content }, { getState, dispatch }) => {
//   if (!content || typeof content !== 'string' || content.trim() === '') {
//     throw new Error('Message content cannot be empty.');
//   }

//   const { sessionId } = getState().chat;

//   // Add user message to state
//   dispatch(chatSlice.actions.addMessage({ sender: 'user', content }));
//   // Add empty bot message to prepare for streaming
//   dispatch(chatSlice.actions.addMessage({ sender: 'bot', content: '' }));

//   try {
//     const payload = { content, session_id: sessionId };

//     const response = await fetch('http://127.0.0.1:8000/call', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw new Error(
//         `Streaming response failed: ${response.status} ${response.statusText} - ${
//           errorData.detail || 'Unknown error'
//         }`
//       );
//     }

//     if (!response.body) {
//       throw new Error('No response body received.');
//     }

//     const reader = response.body.getReader();
//     const decoder = new TextDecoder('utf-8');
//     let done = false;
//     let accumulatedContent = '';

//     while (!done) {
//       const { value, done: readerDone } = await reader.read();
//       done = readerDone;
//       const chunk = decoder.decode(value || new Uint8Array(), { stream: true });

//       if (chunk) {
//         accumulatedContent += chunk;
//         dispatch(chatSlice.actions.updateLastBotMessage(chunk));
//       }
//     }

//     // After streaming, check if the accumulated content is JSON
//     if (isValidJson(accumulatedContent)) {
//       try {
//         const parsed = JSON.parse(accumulatedContent);
//         if (parsed.providers) {
//           dispatch(chatSlice.actions.setParsedData(parsed as ParsedData));
//           // Clear the bot message content to avoid duplicating display
//           dispatch(chatSlice.actions.updateLastBotMessage(''));
//         }
//       } catch (err) {
//         console.warn('Failed to parse JSON after validation:', err);
//         // Treat as text/Markdown if parsing fails
//       }
//     }
//   } catch (err) {
//     dispatch(chatSlice.actions.setError((err as Error).message));
//     // Remove empty bot message on error
//     dispatch(chatSlice.actions.removeLastBotMessage());
//   }
// });

// // Create the chat slice
// const chatSlice = createSlice({
//   name: 'chat',
//   initialState,
//   reducers: {
//     addMessage(state, action: PayloadAction<ChatMessage>) {
//       state.messages.push(action.payload);
//     },
//     updateLastBotMessage(state, action: PayloadAction<string>) {
//       const lastMessage = state.messages[state.messages.length - 1];
//       if (lastMessage && lastMessage.sender === 'bot') {
//         lastMessage.content = action.payload; // Replace content for JSON case
//       }
//     },
//     removeLastBotMessage(state) {
//       if (state.messages[state.messages.length - 1]?.sender === 'bot') {
//         state.messages.pop();
//       }
//     },
//     setError(state, action: PayloadAction<string | null>) {
//       state.error = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//     setParsedData(state, action: PayloadAction<ParsedData | null>) {
//       state.parsedData = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(sendChatMessage.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(sendChatMessage.fulfilled, (state) => {
//         state.loading = false;
//       })
//       .addCase(sendChatMessage.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'An error occurred';
//       });
//   },
// });

// // Export actions
// export const { addMessage, updateLastBotMessage, removeLastBotMessage, setError, clearError, setParsedData } =
//   chatSlice.actions;

// // Export reducer
// export default chatSlice.reducer;
// store/slices/chatSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ChatMessage {
  sender: "bot";
  content: string;
}

interface ChatState {
  messages: ChatMessage[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  messages: [
    
  ],
  loading: false,
  error: null,
};

// Async thunk to send chat message and stream bot response
export const sendChatMessage = createAsyncThunk(
  "chat/sendChatMessage",
  async ({ content }: { content: string }, { dispatch, rejectWithValue }) => {
    try {
      const payload = { content };
      const response = await fetch("https://app.demo2.asdev.tech/call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          `Streaming response failed: ${response.status} ${response.statusText} - ${
            errorData.detail || "Unknown error"
          }`
        );
      }

      if (!response.body) {
        throw new Error("No response body received.");
      }

      // Start a new bot message
      dispatch(chatSlice.actions.appendBotMessage({ sender: "bot", content: "" }));

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value || new Uint8Array(), { stream: true });
        if (chunk) {
          // Append chunk to the last bot message
          dispatch(chatSlice.actions.updateLastBotMessage(chunk));
        }
      }

      return null; // No return value needed since updates are handled via actions
    } catch (err ) {
      return rejectWithValue(err as string);
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    appendBotMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    updateLastBotMessage: (state, action) => {
      const lastMessage = state.messages[state.messages.length - 1];
      if (lastMessage && lastMessage.sender === "bot") {
        lastMessage.content += action.payload; // Append chunk to existing content
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendChatMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendChatMessage.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendChatMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setError, appendBotMessage, updateLastBotMessage } =
  chatSlice.actions;
export default chatSlice.reducer;