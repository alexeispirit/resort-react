import React, { Component } from "react";

import { RoomContext } from "../Context";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms } = this.context;
    return <div>FeaturedRooms</div>;
  }
}
