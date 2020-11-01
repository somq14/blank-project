import "react-hot-loader"
import React from "react"
import ReactDOM from "react-dom"
import { hot } from "react-hot-loader/root"

import { App } from "src/components/App"

ReactDOM.render(React.createElement(hot(App)), document.getElementById("root"))
