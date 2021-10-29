import 'renderer/App.css';
import { titleCase } from 'helpers/stringops';
import { checkFatal } from 'helpers/errorHandling';
import { errorMessage } from 'helpers/errorHandling';
import { warningMessage } from 'helpers/errorHandling';

import { useState, useEffect } from 'react';

export default function Dialog(props: any) {
    const [fatal, setFatal] = useState(false);

    useEffect(() => {
        if (props.id) setFatal(checkFatal(props.id));
    }, []);

    return (
        <div className="dialogBox">
            <h1>{(props.type === 'error' && fatal ? 'Fatal ' : '') + titleCase(props.type)} {props.id && `(${props.id.toString()})`}</h1>
            <h2>{props.type === 'error' ? errorMessage(props.id) : props.type === 'warning' ? warningMessage(props.id) : errorMessage(0)}</h2>
            
            <div>
                {props.type === 'error' ? (
                    <button type="button">
                        Get support
                    </button>
                ) : null}
                <button type="button" className="bHighlighted">
                    {fatal ? 'Exit' : 'Ok'}
                </button>
            </div>
        </div>
    )
}