import React from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

import MyDrawer from './drawer'

export const ADD_HOST = Symbol('add host')
export const DELETE_HOST = Symbol('delete host')
export const IMPORT_CONFIG = Symbol('import config')
export const OUTPUT_CONFIG = Symbol('output config')

class AppBarExampleIcon extends React.Component {

    constructor(props) {
        super(props)

        this.state = { open: false }
    }

    handleDrawer() {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Shadowsocks-Node"
                    onLeftIconButtonTouchTap={this.handleDrawer.bind(this)}
                    iconElementRight={
                    <IconMenu
                        width="150px"
                        iconButtonElement={
                        <IconButton><MoreVertIcon /></IconButton>
                        }
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                        <List>
                            <MenuItem onClick={() => this.props.onEvent({ type: ADD_HOST })}  primaryText="Add" />
                            <MenuItem onClick={() => this.props.onEvent({ type: DELETE_HOST })} primaryText="Delete" />
                        </List>
                        <Divider />   
                        <List>
                            <MenuItem onClick={() => this.props.onEvent({ type: IMPORT_CONFIG })}  primaryText="Import" />
                            <MenuItem onClick={() => this.props.onEvent({ type: OUTPUT_CONFIG })} primaryText="Output" />
                        </List>
                    </IconMenu>
                    }                    
                />
                <MyDrawer
                    open={this.state.open} 
                    onEvent={this.props.onEvent}
                    configs={this.props.configs}
                    opened={this.props.opened}
                    handleDrawer={this.handleDrawer.bind(this)}
                />
            </div>
        )
    }
}

const styles = {
}

export default AppBarExampleIcon