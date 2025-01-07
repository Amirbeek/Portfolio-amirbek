import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import React from "react";

export default function NavbarDialog({showDialog,handleDialogClose}) {

    return <Dialog open={showDialog} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>Quick View - Resume</DialogTitle>
        <DialogContent>
            <iframe
                src={require('../portfolio/Amirbek.pdf')}
                style={{width: '100%', height: '500px', border: 'none'}}
                title="Resume Quick View"
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
                Close
            </Button>
        </DialogActions>
    </Dialog>
}