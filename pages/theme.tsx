import React from "react"
import ColorPicker from "material-ui-color-picker"

const theme = () => {
  return (
    <div>
      <ColorPicker
        name='color'
        defaultValue='#000'
        // value={this.state.color} - for controlled component
        onChange={(color) => console.log(color)}
      />
    </div>
  )
}

export default theme
