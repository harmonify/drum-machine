import { useState } from 'react'
import { Switch } from '@headlessui/react'

export function PowerButton() {
  const [enabled, setEnabled] = useState(false);

  function handleChange() {
    setEnabled(! enabled);
  }

  return (
    <Switch.Group>
      <div className="flex flex-col space-y-2 justify-center items-center">
        <Switch.Label className="font-mono font-medium text-xl">Power</Switch.Label>
        <Switch
          checked={enabled}
          onChange={handleChange}
          className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex shadow-sm items-center scale-105 transform h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
  )
}
