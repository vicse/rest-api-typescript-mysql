
import express = require('express');

import path = require('path');
 

//export para ser utilizada en otros archivos
export default class Server {

    public app: express.Application;
    public port: number;
    
    constructor( puerto: number) {

        this.port = puerto;
        this.app = express();

    }

    static init ( puerto: number ) {
        return new Server( puerto );
    }

    private publicFolder() {

        const publicPath = path.resolve( __dirname, '../public');

        this.app.use( express.static(publicPath) );
        
    }

    start( callback: FunctionStringCallback ) {

        this.app.listen( this.port, callback );
        this.publicFolder();

    }

}