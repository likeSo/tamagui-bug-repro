import React, {useState} from 'react'
import { Link, Stack } from 'expo-router';
import { Dialog, Input, Select, YStack, Button, Label } from 'tamagui';


export default function Page() {
  const [text, setText] = useState('')
  return (
    <>
      <Stack.Screen options={{ title: 'Tamagui Bug Repro' }} />
      <YStack flex={1} justifyContent='center' ai='center' space='$4'>
        <Label>This `Select` component does not work on web because no `select` tag wrapped</Label>
        <Select native>
          <Select.Trigger>
            <Select.Value placeholder="Please select" />
          </Select.Trigger>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport>
              <Select.Content>
                <Select.Item index={0} value='0'>
                  <Select.ItemText>Apple</Select.ItemText>
                </Select.Item>
                <Select.Item index={1} value='1'>
                  <Select.ItemText>Orange</Select.ItemText>
                </Select.Item>
                <Select.Item index={2} value='2'>
                  <Select.ItemText>Banana</Select.ItemText>
                </Select.Item>
                <Select.Item index={3} value='3'>
                  <Select.ItemText>Watermelon</Select.ItemText>
                </Select.Item>
                <Select.Item index={4} value='4'>
                  <Select.ItemText>Peach</Select.ItemText>
                </Select.Item>
                <Select.Item index={5} value='5'>
                  <Select.ItemText>Grape</Select.ItemText>
                </Select.Item>
              </Select.Content>
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select>

        <Label>This `Input` component that inside Dialog, cannot input chinese</Label>
        <Dialog modal>
          <Dialog.Trigger asChild>
            <Button>Show Dialog</Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content bordered>
              <Dialog.Title>This `Input` cannot input chinese</Dialog.Title>
              <Input placeholder='please input' value={text} onChangeText={setText} />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog>
      </YStack>
    </>
  );
}
