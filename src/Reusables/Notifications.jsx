import React from "react";
import { useState } from 'react'
import {Switch } from 'react'


function Notifications() {
  const [enabled, setEnabled] = useState(true)

  return (
    <form action="/notification-settings" method="post">
      <Switch checked={enabled} onChange={setEnabled} name="notifications">
        {/* ... */}
      </Switch>
      <button>Submit</button>
    </form>
  )
}

export default Notifications;