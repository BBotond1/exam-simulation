import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Subscription.css";

function Subscription() {
  const [corect, setCorect] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [subscribed, setSubscribed] = useState(false)

  const postFetch = (data) =>
    fetch("https://demoapi.com/api/series/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {setSent(true)
        setTimeout(() => {
          setSubscribed(true)
        }, 5000);
      });

  return (
    <div className={subscribed ? "none" : ""}>
      <h2>Subscribe to our newsletter</h2>
      {sending === false ? (
        <form className={sending === true ? "none" : ""}>
          <TextField
            onChange={(e) => {
              setInput(e.target.value);
              if (
                e.target.value.includes("@") &&
                e.target.value.includes(".")
              ) {
                setCorect(true);
              }
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button
            onClick={() => {
              if (corect) {
                console.log(input);
                setSending(true);
                postFetch({ email: input });
              }
            }}
            variant="contained"
            disabled={corect ? false : true}
          >
            Submit
          </Button>
        </form>
      ) : (
        <div>{!sent ? "Sending" : "Subscribed"}</div>
      )}
    </div>
  );
}

export default Subscription;
