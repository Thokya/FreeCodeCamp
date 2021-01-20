// Using the Test Method

/*
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
If you want to find the word "the" in the string "The dog chased the cat", you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.
JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
*/

let testStr = "freeCodeCamp";
let testRegex = /Code/;

console.log(testRegex.test(testStr));
//===========================================================================================================================================

// Match Literal Strings

/*
In the last challenge, you searched for the word "Hello" using the regular expression /Hello/. That regex searched for a literal match of the string "Hello". Here's another example searching for a literal match of the string "Kevin":
*/

let testStrTwo = "Hello, my name is Kevin.";
let testRegexTwo = /Kevin/;

console.log(testRegexTwo.test(testStrTwo));

/*Any other forms of "Kevin" will not match. For example, the regex /Kevin/ will not match "kevin" or "KEVIN".*/

let wrongRegex = /kevin/;

console.log(wrongRegex.test(testStrTwo));

/*A future challenge will show how to match those other forms as well.*/
//===========================================================================================================================================

// Match a Literal String with Different Possibilities

/*
Using regexes like /coding/, you can look for the pattern "coding" in another string.
This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.
This operator matches patterns either before or after it. For example, if you wanted to match "yes" or "no", the regex you want is /yes|no/.
You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.
*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

console.log(result)
//===========================================================================================================================================

// Ignore Case While Matching

/*
Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.
Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are "A", "B", and "C". Examples of lowercase are "a", "b", and "c".
You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".
*/

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let resultCaseFlag = fccRegex.test(myString);

console.log(resultCaseFlag)
//===========================================================================================================================================

// Extract Matches

/*
So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.
To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
Here's an example:
*/

console.log("Hello, World!".match(/Hello/));

let ourStr = "Regular expressions";
let ourRegex = /expressions/;

console.log(ourStr.match(ourRegex));

/*
Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
'string'.match(/regex/);
/regex/.test('string');
*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let resultMatch = extractStr.match(codingRegex);

console.log(resultMatch)
//===========================================================================================================================================

// Find More Than the First Match

/*
So far, you have only been able to extract or search a pattern once.
*/

let testStrRepeat = "Repeat, Repeat, Repeat";
let ourRegexRepeat = /Repeat/;
console.log(testStrRepeat.match(ourRegexRepeat));

/*
To search or extract a pattern more than once, you can use the 'g' flag.
*/

let repeatRegex = /Repeat/g;
console.log(testStr.match(repeatRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let resultGflag = twinkleStar.match(starRegex);

console.log(resultGflag)
//===========================================================================================================================================

// Match Anything with Wildcard Period

/*
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .
The wildcard character . will match any one character. The wildcard is also called 'dot' and 'period'. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.
*/

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;

console.log(huRegex.test(humStr));
console.log(huRegex.test(hugStr));

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let resultWildCardPeriod = unRegex.test(exampleStr);

console.log(resultWildCardPeriod);
//===========================================================================================================================================

// Match Single Character with Multiple Possibilities

/*
You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.
You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters "a", "i", or "u".
*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;

console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let resultCharacterClass = quoteSample.match(vowelRegex);

console.log(resultCharacterClass)
//===========================================================================================================================================

// Match Letters of the Alphabet

/*
You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
Inside a character set, you can define a range of characters to match using a hyphen character: '-'.
For example, to match lowercase letters a through e you would use [a-e].
*/

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bg1Regex = /[a-e]at/;

console.log(catStr.match(bg1Regex));
console.log(batStr.match(bg1Regex));
console.log(matStr.match(bg1Regex));

let quoteAnotherSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let resultHyphenCharacter = quoteAnotherSample.match(alphabetRegex);

console.log(resultHyphenCharacter)
//===========================================================================================================================================

// Match Numbers and Letters of the Alphabet

/*
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
Also, it is possible to combine a range of letters and numbers in a single character set.
*/

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;

console.log(jennyStr.match(myRegex));

let quoteAnotherSampleOne = "Blueberry 3.141592653s are delicious.";
let alphabetNumbersRegex = /[h-s0-9]/ig;
let resultMatchNumbersLetters = quoteAnotherSampleOne.match(alphabetNumbersRegex);

console.log(resultMatchNumbersLetters);
//===========================================================================================================================================

// Match Single Characters Not Specified

/*
So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.
To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
*/

let quoteSampleNegatedCharacter = "3 blind mice.";
let myRegexNegatedCharacter = /[^0-9aeiou]/ig;
let resultNegatedCharacter = quoteSampleNegatedCharacter.match(myRegexNegatedCharacter);
console.log(resultNegatedCharacter)
//===========================================================================================================================================

// Match Characters that Occur One or More TimesPassed

/*
Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].
If it were instead checking the string "abab", it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no "a" in the string "bcd", it wouldn't find a match.
*/

let difficultSpellingPlusCharacter = "Mississippi";
let myRegexPlusCharacter = /s+/ig;
let resultPlusCharacter = difficultSpellingPlusCharacter.match(myRegexPlusCharacter);
console.log(resultPlusCharacter)
//===========================================================================================================================================

// Match Characters that Occur Zero or More TimesPassed

/*
The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.
The character to do this is the asterisk or star: *.
*/

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));
//===========================================================================================================================================

// Find Characters with Lazy Matching

/*
In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.
However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
Note :
Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.
*/

let textLazyMatching = "<h1>Winter is coming</h1>";
let myRegexLazyMatching = /<h[a-z]*?1>/g;
let resultLazyMatching = textLazyMatching.match(myRegexLazyMatching);

console.log(resultLazyMatching);
//===========================================================================================================================================

// Match Beginning String Patterns

/*
Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.
In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
*/

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
let notFirst = "You can't find Ricky now.";

console.log(firstRegex.test(firstString));
console.log(firstRegex.test(notFirst));

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegexMatchAtBeginning = /^Cal/;
let resultMatchAtBeginning = calRegexMatchAtBeginning.test(rickyAndCal);

console.log(resultMatchAtBeginning);
//===========================================================================================================================================

// Match Ending String PatternsPassed

/*
In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.
You can search the end of strings using the dollar sign character $ at the end of the regex.
*/

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
let noEnding = "Sometimes a story will have to end";

console.log(storyRegex.test(theEnding));
console.log(storyRegex.test(noEnding));

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let resultMatchAtEnd = lastRegex.test(caboose);

console.log(resultMatchAtEnd)
//===========================================================================================================================================

// Match All Letters and Numbers

/*
Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.
The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
*/

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";

console.log(longHand.test(numbers));
console.log(shortHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(varNames));

let quoteSampleMatchAllLettersNumbersUnderscoreCharacter = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let resultMatchAllLettersNumbersUnderscoreCharacter = quoteSampleMatchAllLettersNumbersUnderscoreCharacter.match(alphabetRegexV2).length;

console.log(resultMatchAllLettersNumbersUnderscoreCharacter);
//===========================================================================================================================================

// Match Everything But Letters and Numbers

/*
You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.
You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
*/

let shortHandMatchEverythingButLettersNumbers = /\W/;
let numbersshortHandMatchEverythingButLettersNumbers = "42%";
let sentenceshortHandMatchEverythingButLettersNumbers = "Coding!";

console.log(numbersshortHandMatchEverythingButLettersNumbers.match(shortHandMatchEverythingButLettersNumbers));
console.log(sentenceshortHandMatchEverythingButLettersNumbers.match(shortHandMatchEverythingButLettersNumbers));

let quoteSampleMatchEverythinButLettersNumbers = "The five boxing wizards jump quickly.";
let nonAlphabetRegexMatchEverythinButLettersNumbers = /\W/g;
let resultMatchEverythinButLettersNumbers = quoteSampleMatchEverythinButLettersNumbers.match(nonAlphabetRegexMatchEverythinButLettersNumbers).length;

console.log(resultMatchEverythinButLettersNumbers);
//===========================================================================================================================================

// Match All Numbers

/*
You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.
The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
*/

let movieNameMatchAllNumbers = "2001: A Space Odyssey";
let numRegexMatchAllNumbers = /\d/g;
let resultMatchAllNumbersLength = movieNameMatchAllNumbers.match(numRegexMatchAllNumbers).length;
let resultMatchAllNumbers = movieNameMatchAllNumbers.match(numRegexMatchAllNumbers);

console.log(resultMatchAllNumbersLength);
console.log(resultMatchAllNumbers);
//===========================================================================================================================================

// Match All Non-Numbers

/*
The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.
The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
*/

let movieNameMatchNonNumbers = "2001: A Space Odyssey";
let noNumRegexMatchNonNumbers = /\D/g;
let resultMatchNonNumbers = movieNameMatchNonNumbers.match(noNumRegexMatchNonNumbers);
let resultMatchNonNumbersLength = movieNameMatchNonNumbers.match(noNumRegexMatchNonNumbers).length;

console.log(resultMatchNonNumbers);
console.log(resultMatchNonNumbersLength);
//===========================================================================================================================================

// Restrict Possible Usernames

/*
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
 - Usernames can only use alpha-numeric characters.

 - The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

 - Username letters can be lowercase and uppercase.

 - Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;

/*
 - ^ - start of input
 - [a-z] - first character is a letter
 - [a-z]+ - following characters are letters
 - \d*$ - input ends with 0 or more digits
 - | - or
 - ^[a-z] - first character is a letter
 - \d\d+ - following characters are 2 or more digits
 - $ - end of input
*/

/*
more ways:
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
 - ^ - start of input
 - [a-z] - first character is a letter
 - [0-9]{2,0} - ends with two or more numbers
 - | - or
 - [a-z]+ - has one or more letters next
 - \d* - and ends with zero or more numbers
 - $ - end of input
 - i - ignore case of input
*/

console.log(userCheck.test(username));
console.log(userCheck.test("Jack"));
console.log(userCheck.test("Oceans11"));
console.log(userCheck.test("RegexGuru"));
console.log(userCheck.test("BadUs3rnam3"));
console.log(userCheck.test("Z97"));
console.log(userCheck.test("AB1"));
//===========================================================================================================================================

// Match Whitespace

/*
The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.
You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].
*/

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;

console.log(whiteSpace.match(spaceRegex));

let sampleWhiteSpace = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let resultWhiteSpace = sampleWhiteSpace.match(countWhiteSpace);

console.log(resultWhiteSpace);
//===========================================================================================================================================

// Match Non-Whitespace Characters

/*
You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.
Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].
*/

let whiteSpaceNonWhiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;

console.log(whiteSpaceNonWhiteSpace.match(nonSpaceRegex).length);

let sampleNonWhiteSpace = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let resultNonWhiteSpace = sampleNonWhiteSpace.match(countNonWhiteSpace);

console.log(resultNonWhiteSpace);
//===========================================================================================================================================

// Specify Upper and Lower Number of Matchess

/*
Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.
You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.
For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.
*/

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;

console.log(multipleA.test(A4));
console.log(multipleA.test(A2));

let ohStrUpperLowerMatches = "Ohhh no";
let ohRegexUpperLowerMatches = /Oh{3,6} no/;
let resultUpperLowerMatches = ohRegexUpperLowerMatches.test(ohStrUpperLowerMatches);

console.log(resultUpperLowerMatches)
//===========================================================================================================================================

// Specify Only the Lower Number of Matches

/*
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.
To only specify the lower number of patterns, keep the first number followed by a comma.
For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
*/

let A4LowerNumberOfMatches = "haaaah";
let A2LowerNumberOfMatches = "haah";
let A100LowerNumberOfMatches = "h" + "a".repeat(100) + "h";
let multipleALowerNumberOfMatches = /ha{3,}h/;

console.log(multipleALowerNumberOfMatches.test(A4LowerNumberOfMatches));
console.log(multipleALowerNumberOfMatches.test(A2LowerNumberOfMatches));
console.log(multipleALowerNumberOfMatches.test(A100LowerNumberOfMatches));

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let resultLowerNumberOfMatches = haRegex.test(haStr);

console.log(resultLowerNumberOfMatches);
//===========================================================================================================================================

// Specify Exact Number of Matches

/*
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.
To specify a certain number of patterns, just have that one number between the curly brackets.
For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.
*/

let A4ExactNumberOfMatches = "haaaah";
let A3ExactNumberOfMatches = "haaah";
let A100ExactNumberOfMatches = "h" + "a".repeat(100) + "h";
let multipleHAExactNumberOfMatches = /ha{3}h/;

console.log(multipleHAExactNumberOfMatches.test(A4ExactNumberOfMatches));
console.log(multipleHAExactNumberOfMatches.test(A3ExactNumberOfMatches));
console.log(multipleHAExactNumberOfMatches.test(A100ExactNumberOfMatches));
//===========================================================================================================================================

// Check for All or None

/*
Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.
You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
For example, there are slight differences in American and British English and you can use the question mark to match both spellings.
*/

let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;

console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(british));
//===========================================================================================================================================

// Positive and Negative Lookahead

/*
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.
There are two kinds of lookaheads: positive lookahead and negative lookahead.
A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
Lookaheads are a bit confusing but some examples will help.
*/

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;

console.log(quit.match(quRegex));
console.log(noquit.match(qRegex));

/*
A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
*/

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;

console.log(checkPass.test(password));

let sampleWordLookAhead = "astronaut";
let pwRegexLookAhead = /^\D(?=\w{5})(?=\w*\d{2})/;
let resultLookAhead = pwRegexLookAhead.test(sampleWordLookAhead);

console.log(resultLookAhead);
//===========================================================================================================================================

