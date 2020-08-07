class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.")
      this.updateChatbotState(greetingMessage)
    }
    help() {
      const helpMessage = this.createChatBotMessage("Try clicking on any of the available options or type something like 'apis' in the chat!")
      this.updateChatbotState(helpMessage)
    }
    handleDSAList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on DSA:",
        {
          widget: "dsaLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleCPList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on CP:",
        {
          widget: "cpLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleAPIList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on APIs:",
        {
          widget: "apiLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Javascript:",
        {
          widget: "javascriptLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    handleMLList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on ML:",
        {
          widget: "mlLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    updateChatbotState(message) {
      
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
export default ActionProvider;
