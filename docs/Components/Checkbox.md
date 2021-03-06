# Checkbox

Checkboxes are most commonly used to give merchants a way to make a range of selections (zero, one, or multiple). They may also be used as a way to have merchants indicate they agree to specific terms and services.

## Examples

#### Vanilla

```js
import {extend, ExtensionPoint, Checkbox} from '@shopify/argo-admin';

extend(ExtensionPoint.MyExtension, (root) => {
  const checkbox = root.createComponent(Checkbox, {
    label: 'Opt in to something cool',
    checked: true,
    onChange: () => console.log('Checked'),
  });

  root.appendChild(checkbox);

  root.mount();
});
```

#### React

```jsx
import {extend, render, ExtensionPoint, Checkbox} from '@shopify/argo-admin-react';

function App() {
  return (
    <Checkbox label="Opt in to something cool" checked onChange={() => console.log('Checked')} />
  );
}

extend(
  ExtensionPoint.MyExtension,
  render(() => <App />),
);
```

## Props API

| Name     | Type                | Description                                                                                | Required |
| -------- | ------------------- | ------------------------------------------------------------------------------------------ | -------- |
| label    | `string`            | Label for the checkbox.                                                                    |          |
| checked  | `boolean`           | Checkbox is selected.                                                                      |          |
| value    | `boolean`           | An alias of checked. If both checked and value are define, checked is the source of truth. |          |
| onChange | `(boolean) => void` | Callback when checkbox is toggled.                                                         |          |
