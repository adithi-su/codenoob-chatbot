class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }
      if (lowerCaseMessage.includes("dsa")) {
        this.actionProvider.handleDSAList();
      }
      if (lowerCaseMessage.includes("competitive programming") || lowerCaseMessage.includes("cp") ) {
        this.actionProvider.handleCPList();
      }
      if (lowerCaseMessage.includes("apis")) {
        this.actionProvider.handleAPIList();
      }
      if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleJavascriptList();
      }
      if (lowerCaseMessage.includes("ml") || lowerCaseMessage.includes("machine learning")) {
        this.actionProvider.handleMLList();
      }
     else {
       this.actionProvider.help()
     }
    }
  }
  
  export default MessageParser