import requests

def get_joke():
    url = "https://v2.jokeapi.dev/joke/Any"
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        joke_data = response.json()

        if joke_data['type'] == 'single':
            print(f"Joke: {joke_data['joke']}")
        elif joke_data['type'] == 'twopart':
            print(f"Setup: {joke_data['setup']}\n")
            print(f"Delivery: {joke_data['delivery']}")
        else:
            print("Unknown joke format.")
            
    except requests.exceptions.HTTPError as errh:
        print ("Http Error:",errh)
    except requests.exceptions.ConnectionError as errc:
        print ("Error Connecting:",errc)
    except requests.exceptions.Timeout as errt:
        print ("Timeout Error:",errt)
    except requests.exceptions.RequestException as err:
        print ("Oops: Something Else",err)

if __name__ == "__main__":
    get_joke()
