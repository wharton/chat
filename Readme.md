# Empirica Chat

This package contains a React component for a Chat in Lobby and Chat in Round

for Empirica.

Add to your Empirica project with:

```sh

meteor npm install --save @empirica/chat

```

## Usage

```jsx
import { Chat } from "@empirica/chat";

//...

<Chat player={player} scope={game} />;
```

`Chat` expects 2 required props:

- `player`: the current player

- `scope`: object that the chat will be attached to, can be game, round, or

stage objects.

`Chat` also displays a name for each participant, which you need to set

in the experiment independently of the `playerId`: `player.set('name', "myPseudonym")`

### Multiple chat instances within the same scope

You can pass an optional `customKey` string prop to differentiate different chats

within the same scope. This changes which get/set key on the given scope the chat will

be recorded.

```jsx
<Chat player={player} scope={game} customKey="casual_chat" />
```

### Adding timestamp to chat message

You can pass an optional `timeStamp` date prop to add the timestamp attribute on each message sent

```jsx
<Chat player={player} scope={game} timeStamp={timeStamp} />
```

### Filtering which messages to show

You can filter out which messages to show in the chat with the `filter`

callback. The `filter` call back will be called with all messages in an array

before they are displayed. You can return any transformation of that array. This

allows to filter an/or inject data into the messages at display time. For

example, don't show messages that include the word "pizza":

```jsx
<Chat
  player={player}
  scope={game}
  filter={(msgs) => msgs.filter((msg) => !msg.text.includes("pizza"))}
/>
```

### Transforming the message before creation

Before each message is created (after the player submits the message), the

`onNewMessage` callback give the opportunity to modify the message.

For example, you might want to attach extra metadata on the message:

```jsx
<Chat
  player={player}
  scope={game}
  onNewMessage={(msg) => {
    msg.period = "blue";

    return msg;
  }}
/>
```

If you return other from the callback, the message will not be created, this

way you can filter messages before they are created. For example, you really

don't like pizza:

```jsx
<Chat
  player={player}
  scope={game}
  onNewMessage={(msg) => (msg.text.includes("pizza") ? null : msg)}
/>
```

### Customizing the UI

The default UI's CSS is scoped to `.empirica-chat-container`. Feel free to

override any object for simple UI changes. See `./src/style.less` for details

about the CSS.

If you require further customization, you can override the core UI components

like this:

```jsx
<Chat player={player} scope={round} header={null} message={Message} />
```

If you pass null to any component override, the component will not render (in

the example above, we removed the chat header).

The available component overrides are as follow:

- `header`: The header of the open chat window.

- `closed`: The header of the closed chat window.

- `message`: A message (with body and author info)

- `footer`: The footer of the chat window, which contains the input by default.

All components receive the `player`, `scope`, and `customKey` props. `header` and

`closed` also receive an `onClick` prop, that will toggle chat window open and

closed. And `footer` receives `onNewMessage` which new messages should be sent

to. See existing components in `./src` for details.

### Hide the Avatar or Name inside the Message

If you want to hide the `avatar` or `name` you can pass additional props. The default value from the both props are `false`.

This code will hide the avatar:

```jsx

<Chat hideAvatar ... />

```

This code will hide the name:

```jsx

<Chat hideName ... />

```

### Custom Styling of the Chat's Root Component

If you want to override the root's css of Chat's Component, you can pass additional prop `customClassName`.

```jsx

<Chat customClassName="experiment-chat" ... />

```

### Docked Chat

Chat can be on docked into the bottom of the page or fill the height and width of its wrapper. You can pass additional prop `docked` into chat to make it docked. The default value of `docked` is `false`.

This code will make the Chat docked:

```jsx

<Chat docked ... />

```

### Set the Chat's Window appearance

Chat Window can be set to be opened or closed when it appears on the first time. You can add additional prop `dockStartOpen`. The default value is `true`.

This code will make Chat's window will be closed when it appears on the first time.

```jsx

<Chat dockStartOpen={false} ... />

```

## Usage: Chat in Lobby

To use the Chat in the Lobby, you can simply add the `LobbyChat` component of

this package in your experiment's `./client/main.js` file, like this:

```js
import { LobbyChat } from "@empirica/chat";

//...

Empirica.lobby(LobbyChat);
```

If you wish to further configure the Lobby chat, you will need to create a lobby

component on the example found in `./src/LobbyChat.js`.

# Development

To build the package, run `npm run build`.
