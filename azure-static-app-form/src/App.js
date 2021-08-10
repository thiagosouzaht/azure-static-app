import logo from "./logo.svg";
import "./css/skeleton.css";
import "./css/normalize.css";

function App() {
  return (
    <div class="container">
      <h1>Send your intetion to us!</h1>
      <form>
        <div class="row">
          <div class="six columns">
            <label for="exampleEmailInput">Your email</label>
            <input
              class="u-full-width"
              type="email"
              placeholder="test@mailbox.com"
              id="exampleEmailInput"
            />
          </div>
          <div class="six columns">
            <label for="exampleRecipientInput">Reason for contacting</label>
            <select class="u-full-width" id="exampleRecipientInput">
              <option value="Option 1">Questions</option>
              <option value="Option 2">Admiration</option>
              <option value="Option 3">Can I get your number?</option>
            </select>
          </div>
        </div>
        <label for="exampleMessage">Message</label>
        <textarea
          class="u-full-width"
          placeholder="Hi Dave …"
          id="exampleMessage"
        ></textarea>
        <label class="example-send-yourself-copy">
          <input type="checkbox" />
          <span class="label-body">Send a copy to yourself</span>
        </label>
        <input class="button-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
