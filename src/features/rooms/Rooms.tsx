import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    reset,
    moveDown,
    moveLeft,
    moveRight,
    moveUp,
    setActiveRoomAsVisited,
    selectActiveRoom,
    selectRoomStatuses
} from './roomsSlice';

export function Rooms() {
    const activeRoom = useAppSelector(selectActiveRoom);
    const roomStatuses = useAppSelector(selectRoomStatuses);
    const dispatch = useAppDispatch();

    const handleKeyDown = (event: KeyboardEvent) => {
        const keyName = event.key;
        console.log('keydown event\n\nkey:', keyName);
        switch (keyName) { 
            case 'ArrowDown': dispatch(moveDown())
                break
            case 'ArrowUp': dispatch(moveUp())
                break
            case 'ArrowLeft': dispatch(moveLeft())
                break
            case 'ArrowRight': dispatch(moveRight())
                break
            case 'Enter': dispatch(setActiveRoomAsVisited())
                break
            default: break
        }
    }

    useEffect(() => {
        // Anything in here is fired on component mount.
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Anything in here is fired on component unmount.
            document.removeEventListener('keydown', handleKeyDown);
            // $(document.body).off('keydown', handleKeyDown);
        }
    }, [])

    return (
        <>
            <p>Active: {activeRoom}</p>
            <p>Statuses: <br/>{roomStatuses.map((r, i) => {
                if (i % 3 === 2) {
                    return <>{r}<br/></>
                } else {
                    return <>{r}, </>
                }
            })}</p>
            <button onClick={() => dispatch(moveDown())}>moveDown</button><br/>
            <button onClick={() => dispatch(moveLeft())}>moveLeft</button><br/>
            <button onClick={() => dispatch(moveRight())}>moveRight</button><br/>
            <button onClick={() => dispatch(moveUp())}>moveUp</button><br/>
            <button onClick={() => dispatch(setActiveRoomAsVisited())}>setActiveRoomAsVisited</button><br/>
            <br/>
            <button onClick={() => dispatch(reset())}>reset</button>
        </>
        // <div>
        // <div className={styles.row}>
        //     <button
        //     className={styles.button}
        //     aria-label="Decrement value"
        //     onClick={() => dispatch(decrement())}
        //     >
        //     -
        //     </button>
        //     <span className={styles.value}>{count}</span>
        //     <button
        //     className={styles.button}
        //     aria-label="Increment value"
        //     onClick={() => dispatch(increment())}
        //     >
        //     +
        //     </button>
        // </div>
        // <div className={styles.row}>
        //     <input
        //     className={styles.textbox}
        //     aria-label="Set increment amount"
        //     value={incrementAmount}
        //     onChange={(e) => setIncrementAmount(e.target.value)}
        //     />
        //     <button
        //     className={styles.button}
        //     onClick={() => dispatch(incrementByAmount(incrementValue))}
        //     >
        //     Add Amount
        //     </button>
        //     <button
        //     className={styles.asyncButton}
        //     onClick={() => dispatch(incrementAsync(incrementValue))}
        //     >
        //     Add Async
        //     </button>
        //     <button
        //     className={styles.button}
        //     onClick={() => dispatch(incrementIfOdd(incrementValue))}
        //     >
        //     Add If Odd
        //     </button>
        // </div>
        // </div>
    );
}
