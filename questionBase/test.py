import csv
import json

# Read the JSON file
with open('questions.json') as f:
    data = json.load(f)

# Open the CSV file in write mode
with open('questions.csv', 'w', newline='') as f:
    writer = csv.writer(f)

    # Write the header row
    writer.writerow(['Question', 'Option 1', 'Option 2', 'Option 3', 'Option 4'])

    # Write the data rows
    for key, value in data.items():
        # Get the question text or image path
        question = value[0]
        if question.startswith('./img'):
            question = '=IMAGE("{}")'.format(question)

        # Get the options
        options = value[1]

        # Write the row to the CSV file
        writer.writerow([question, options[0], options[1], options[2], options[3]])
