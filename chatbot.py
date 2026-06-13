while True:
    user = input("You: ").lower().strip()
    if user == "hello":
        print("Bot: Hi there!")
    elif user == "hi":
        print("Bot: Hello!")
    elif user == "bye":
        print("Bot: Goodbye!")
        break
    elif user == "how are you":
        print("Bot: I'm just a bot, but I'm doing great!")
    elif user == "name":
        print("Bot: My name is DecodeBot.")
    elif user == "help":
        print("Bot: Ask me simple questions.")
    elif user == "what is your favorite color":
        print("Bot: I don't have a favorite color, but I like all colors equally!")
    else:
        print("Bot: I'm not sure how to respond to that. Try asking something else.")