import React, { useState } from "react";
import { CircleLoader } from "react-spinners";

function MyComponent() {
    const [isLoading, setIsLoading] = useState(true);

        // Make an API call or perform some other asynchronous operation
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Simulate a 3 second delay


    return (
        <div>
            {isLoading ? <CircleLoader /> : <div>Data Loaded</div>}
        </div>
    );
}
export default MyComponent;