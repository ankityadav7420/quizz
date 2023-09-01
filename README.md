## Deployed Link:

```bash
https://quizz-ankit.vercel.app/
```

## Getting Started

First, run the development server:

```bash
1. go to the folder quizz
2. npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

1. **Quiz Layout & Flow**:

● The application have a start page where the user should submit their name and email address to start quiz.
● Then the application will display 15 questions to the user.
● A timer will be displayed on the top of the page, counting down from 30 minutes.
● Quiz will be auto-submit when the timer reaches zero. when 5 minuts left timer will become red to increse user experiance.
● At top user's name, email, timer, submit button will be displayed.
● Timer value can be changes accouding to our requirement from .env file
● Next and previous button is there to nevigate from one question to another

2. **Navigation**:

● From Left most of screen user will be able to navigate to any specific question any time.
● Question description will be shown in middle-right of the screen with all given options
● An overview panel or similar element will show all questions indicating:
    ● Which questions the user has visited in gray.
    ● Which questions have been attempted in green.

3. **End of Quiz**:

● User can submit anytime to see the report. Report will be shown question by question.
● For attempted question if user is wrong then it will be dispalyed in red else in green color to make coparision.
● To help user we provide the sollution so all correct answer will be dispalyed in green.

4. **Data Source**:

● Fetching the quiz questions from https://opentdb.com/api.php?amount=15 API.

Note: Since this is only a UI, no data will be stored. If the user refreshes the page, their progress will be lost

## Deployed on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
