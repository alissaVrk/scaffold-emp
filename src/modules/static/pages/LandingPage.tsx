import { Button } from "components"
import { useNavigate } from "react-router-dom";

export function LandingPage() {
    const navigate = useNavigate();

    return (
        <>
            <h2>welcome to Empathy.....</h2>
            <h3>this is some page that doesn't require login</h3>
            <Button title="LOGIN" variant="dark" onClick={() => navigate("/login")} />
        </>
    )
}
