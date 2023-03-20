from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import time
import requests
import os
import json
#----------------------------------------------------------------------------
def startQuestionCrawl(_questionLength):
    
    # Configure the webdriver
    chrome_options = Options()
    chrome_options.add_experimental_option("detach", True)
    # start the webdriver
    driver = webdriver.Chrome(chrome_options=chrome_options)
    # navigate to the target URL
    driver.get('https://www.ccdriving.ca/index.php?route=test/mock&test_type=view&language=en')
    # locate the "All" button by ID and click on it
    allButton = WebDriverWait(driver, 10).until(EC.element_to_be_clickable(driver.find_element(By.XPATH,"//*[text()='All']")))
    #button = driver.find_element(By.XPATH,"//*[text()='All']")
    allButton.click()
    

    questionLength = _questionLength
    questionNumber = 1
    directory = "./img"
    # initialze the questionBase dictionary
    questionBase = {}

    while questionLength>0:

        time.sleep(15)
        # get the HTML source of the page
        html = driver.page_source
        # parse the page source with BeautifulSoup
        soup = BeautifulSoup(html, 'html.parser')
        # find the question divs
        question_divs = soup.find_all('div', {'id': 'question'})
        print(question_divs)

        # process each question div
        for question_div in question_divs:
            
            # handle text questions
            # get the question text
            question_text = question_div.text.strip()
            print(question_text)

            # handle image questions: save the jpg file to ./img
            # get the image url, if there is one
            image = question_div.find('img')
            if image:
                image_url = "https://www.ccdriving.ca" + image['src']
                image_response = requests.get(image_url)
                # Save the image to a file
                with open(os.path.join(directory,f"question_{str(questionNumber)}.jpg"), 'wb') as f:
                    f.write(image_response.content)
            else:
                image_url = None
            
            # handle question options
            questionOptions = []
            numberOfOption = 1
            while numberOfOption <= 4:
                questionOptions.append(soup.find('div', {'id': f"option_{numberOfOption}"}).text.strip())
                #questionOptions.append(driver.find_element(By.ID,f"option_{numberOfOption}").text.strip())
                numberOfOption +=1
            
            print(questionOptions)

            # handle the textQuestion dictionary
            # handle in a seperate if else statement for future maintainence
            if question_text == "" or image:
                valueArray = []
                valueArray.append(os.path.join(directory,f"question_{str(questionNumber)}.jpg"))
                valueArray.append(questionOptions)
                questionBase[questionNumber] = valueArray
            elif image_url == None:
                valueArray = []
                valueArray.append(question_text)
                valueArray.append(questionOptions)
                questionBase[questionNumber] = valueArray

        questionNumber +=1
        questionLength-=1
        #nextButton = driver.find_element(By.ID,"option_1")
        nextButton = WebDriverWait(driver, 10).until(EC.element_to_be_clickable(driver.find_element(By.ID,"option_1")))
        #time.sleep(5)
        nextButton.click()

    with open("questions.json", "w") as f:
        # write the dictionary to the file in JSON format
        json.dump(questionBase, f)


        
# Initiate the crawling by calling the startQuestionCrawl() function
startQuestionCrawl(162)