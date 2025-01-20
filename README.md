# Redux

- Redux ek JavaScript library hai jo state management ke liye use hoti hai. Ye React, Angular, ya kisi bhi JavaScript framework ke saath kaam kar sakti hai. Redux ka primary purpose hai application ki state ko manage karna aur predictability provide karna, especially jab application kaafi complex ho jaaye aur usme multiple components aur user interactions ho.

- Redux ek state container hai jo centralized store provide karta hai jisme aapki poori application ki state rakhi jaa sakti hai. Iska structure 3 basic principles par based hai:

1. Single Source of Truth: Saari state ek hi store me hoti hai, jo predictable aur easy to debug hota hai.
2. State is Read-Only: State directly mutate nahi hoti; agar aap state ko change karna chahte hain toh actions dispatch karte hain.
3. Pure Reducers: State ko update karne ka kaam reducers karte hain jo ek pure function hote hain. Reducer state aur action ko input ke roop me leta hai aur nayi state return karta hai.

## Redux Kyu Zaroori Hai? (Use Case)

1. Complex State Management: Agar application ke multiple components ek hi state ko share karte hain, toh Redux is state ko easily manage karta hai.
2. Data Flow Simplification: Redux ek unidirectional data flow (ek taraf se data ka flow) follow karta hai, jo debugging aur maintenance ko easy banata hai.
3. Predictability: Har state ka ek specific source hota hai aur changes ka ek fixed process hota hai, jo bugs ko avoid karne me madad karta hai.
4. Time Travel Debugging: Redux ke saath, aap state ke changes ko track aur undo/redo kar sakte hain.
5. Scalability: Large-scale applications ke liye Redux state ko modular aur maintainable banata hai.

## Redux Kaise Kaam Karta Hai?

1. Store: Application ki centralized state store hoti hai.
2. Actions: Ye plain JavaScript objects hote hain jo batate hain ki kya change hona chahiye.
3. Reducers: Ye ek function hai jo action ke basis par state ko update karta hai aur nayi state return karta hai.
4. Dispatch: Action ko reducer tak bhejne ke liye dispatch method use hota hai.
5. Subscription: Components subscribe karte hain store se updates lene ke liye.
