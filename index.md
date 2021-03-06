---
layout: default
---

# Bayesian Probabilities: An Introduction

Bayesian probability is a field within the larger field of [Bayesian statistics](https://en.wikipedia.org/wiki/Bayesian_statistics) where 
probability is expressed as a degree of certainty that a particular event will take place. The particular difference in Bayesian probability compared to [frequentist probability](https://en.wikipedia.org/wiki/Frequentist_probability) (the more well known approach) is that when calculating probabilities with Bayesian models, we can update our probabilites when a particular event occurs. In more intuitive terms, when we have an event, and we want to calculate its probability, intuitively, we will try to factor in different variables that may affect the likelihood of that event happening; when one of these variables may change, our initial probability may also therefore change - Bayesian models help us do this mathematically. This is best put by some [great lecture notes](https://www.stat.auckland.ac.nz/~brewer/stats331.pdf) from the University of Auckland:

> "When we get new information, we should update our probabilities to take the new information into account. Bayesian methods tell us exactly how to do this."

## Basic Notation and Terminology

### Notation

There is some basic terminology and notation worth keeping in mind for this project. Firstly, when refereing to the probability of a certain event occuring, it will be expressed as $$P(A)$$ where $$A$$ is the event.The probability of $$A$$ not happening is therefore expressed as $$P(\overline{A})$$ (this is the complement of the set $$A$$, in other words, anything but $$A$$)

> $$P(A) = 1 - P(\overline{A})$$

Here's an [article](https://www.thoughtco.com/prove-the-complement-rule-3126554) on the proof for this expression. 

There are two axioms of $$P$$; the first one is the following: 

> $$ P(\Omega) = 1 $$

More about $$\Omega$$ below. The second is that $$P$$ preserves disjoint unions:

> $$P(A \sqcup B) = P(A) + P(B)$$

In more genral terms: 

> $$ P(\sqcup_{i\in\mathbb{N}} Ai) = \sum_{i\in\mathbb{N}} P(Ai) $$

However, note the subtle difference between $$\sqcup$$ and $$\cup$$: 

> $$ P(A \sqcup B) = P(A) + P(B) \therefore A \cap B = \emptyset $$

> $$ P(A \cup B) = P(A) + P(B) - P(A\cap B) $$

The probability of both happening would be the *intersection* of both events; the intersection of both *sets*. This is expressed as such:

> $$P(A \cap B)$$

The probability of $$A$$ happening *given that* $$B$$ has occured, is expressed like so:

> $$P(A \mid B)$$

In any particular scenario all possible outcomes are in the $$\Omega$$ (capital *omega*) set. If we build on the aforementioned example, we may have three possible outcomes: $$A$$, $$B$$ and $$C$$ (all *elements* of $$\Omega$$).

> $$\therefore \Omega = \{A, B, C\}$$

As mentioned earlier, $$P(\Omega)$$ must always be $$=1$$ (any event that occurs is part of $$\Omega$$ therefore $$P(\Omega)$$ is inherently certain).

$$\sum$$ (*sigma algebra*) set, is also known as the sigma-field. The sigma-field refers to the subsets of a particular probability space used to mathematically define probability (great article on sigma-field [here](https://www.thoughtco.com/sigma-field-3126572)). $$\sum$$ is a subset of the powerset of $$\Omega$$, and remains closed (stable) under comlpements and countable unions 

> $$\sum \subseteq \mathcal{P}(\Omega) = \sigma - algebra$$

> $$P:\sum \rightarrow [0,\ 1]$$

> $$ \Omega \in \sum $$

> $$\forall A \in \sum,\ \ \overline{A} \in \sum$$

> $$ \forall(Ai)_{i\in\mathbb{N}} \in \sum^\mathbb{N},\ \ \bigcup_{i\in\mathbb{N}}Ai \in \sum$$

> $$ \mathbb{N} \ni i \mapsto Ai \in \sum $$

Taking the previous example again, this is what $$\sum$$ would look like:

> $$\sum = \{\emptyset, \{A\}, \{B\}, \{C\}, \{A, B\}, \{A, C\}, \{B, C\}, \Omega \}$$

### Terminology
In Bayesian probability, there are certain terms often used to refer to particular elements in a problem/scenario. Firstly, there are *priors*, which refer to our probabilities at the start of a problem. There probabilities are the probabilites before any updates or changes have been made (e.g. $$P(A)$$). 

Once these probabilities are updated with new information, using Bayesain models, they become known as *postereior* probabilities (e.g. $$P(A \mid B)$$).

### Random Variable 

A 'random variable' $$X$$ is a function $$X:\Omega \rightarrow S$$ going from a *probability space* ($$ \Omega\ ,\ \sum_\Omega\ ,\ P $$) to a measurable ($$S\ ,\ \sum_S $$) such that 

> $$ \forall C \in \sum_S,X^{-1}[C] \in \sum_\Omega $$

It's also worth noting the following probability law of $$X$$:

> $$ \Omega \xrightarrow{\mathit{X}} S $$

> $$ \sum_\Omega \xrightarrow{\mathit{P}} [0, 1] $$

> $$ \sum_S \xrightarrow{\mathit{P\ '}} [0, 1] $$

The following about $$P\ '$$ should also be mentioned: 

> $$ P\ ' : C \mapsto P(X^{-1}[C]) $$

> $$ X^{-1}[-] : \mathcal{P}(S) \to \mathcal{P}(\Omega) $$

> $$ X^{-1}[C] \in \mathcal{P}(\Omega) $$

But it only makes sense it find $$P(X^{-1}[C])$$ if $$X^{-1}[C]\in \sum_{\Omega}$$

In probability theory, there are also expressions such as $$P(X=K)$$ that should be noted too:

> $$ \forall K \in S,\ P(X=K) := P(X^{-1}[{ \{K\} }_{\in \sum_S}]) $$

Note: 

> $$ K \in S \therefore \{K\} \in \mathcal{P}(S) $$

## Probability Distributions

A probability distribution, sometimes known as a probability law, is a function that returns the likelihood of the occurence of different possible outcomes. 

For example, the probability of law of $$X: \Omega \to S$$ will be the following: 

> $$ L_x : S \to [0,1] $$

> $$ L_x : K \mapsto P(X=K) $$

Using this method we can describe the likelihood of different outcomes, some basic distribution examples are explained below.

### Uniform Law 

if $$ X : \Omega \to S$$, we say that $$X$$ follows a uniform law over $$S$$, denoted $$X \sim K(S)$$

> $$ L_x : S \to [0,1] $$

> $$ L_x : K \mapsto P(X=K) = {1 \over{|S|} } $$

 This represents the uniformly distributed probability accross all possible outcomes. 

### Bernoulli Law 

This is essentially a coin toss. 

> $$ S = \{ true, false\} \therefore X : \Omega \to \{true, false\}$$

> $$ X \sim B(p) $$

where $$p$$ is the probability of success $$\in [0,1]$$

> $$ P(X = true) = p $$

> $$ P(X = false) = 1 - p $$

### Binomial Law 

This builds on the previous Bernoulli law, instead throwing $$n$$ independent coin tosses, counting the *number of successes*

> $$ X \sim B(p, n) $$

where $$p \in [0,1]$$ is the probability of getting 'true' on the coin toss, and $$n \in \mathbb{N}$$ is the number of trials done. 

> $$ \forall K \in \mathbb{N}, P(X=K) = {n\choose K} p^K (1-p)^{n-k} $$

Note on the $${n\choose\ k}$$ notation :

> $$ {n\choose K} = { n! \over{ (n-K)!K! } } $$

Another note; if $$ X \sim B(p, n) $$, then $$ X = X_1 + ... + X_n $$ where:

> $$ \forall i, X i \sim B(p) $$

$$ \forall i, X i $$ are all *I.I.D.* variables: independent identically distributed 

Upon these basic laws, other much more complex laws are built, such as the geometric law, Poisson law and multinomial laws.

## Bayes Theorem

Bayes Theorem is used to update our prior probabilities with new information, in particular, knowing that a particular event has occured. This is extremely powerful as most probabilities are dependent on other events occuring.

### Important Note
In typical (basic) textbooks, probability is merely a ratio, and when calculating the probability of two events *both* happening ($$P(A \cap B)$$), both probabilities ($$P(A)$$ and $$P(B)$$) are multiplied together; this implicitly assumes that both events are completely independent and the occurence of $$B$$ will not affect $$P(A)$$ *at all*. For example, this might be something like flipping a coin and getting heads, and then rolling a dice and getting six. However, this typically only happens in text books, and in real world use cases, the occurence of one event affects the probability that the other will also happen. 

> $$P(A \cap B) = P(A \mid B) \times P(B)$$

This is true because we have accounted for the change in $$P(A)$$ if $$B$$ has also occured

> $$(P(A \cap B) = P(A) \times P(B))$$

This is only true when the events are completely independent; when: 

> $$P(A \cap B) = P(A)$$

### Putting It Together 
Moving on from A, B and C, we'll now use H, for hypothesis, and D, for data (there is reason to do this). 

> $$H\ \ \ \ \rightarrow\ \ \ Hypothesis$$

> $$D\ \ \ \ \rightarrow\ \ \ Data$$

> $$D,\ H\in\sum$$

In words, $$P(H)$$ is the probability that our hypothesis about a given situation is correct, and $$P(D)$$ is the probability of finding a certain piece of data; making a particular observation for example. With this in mind, as well as what has been mentioned above, we can put together the theorem:

> $$P(H \cap D) = P(D \cap H)$$

> $$P(D \cap H) = P(D \mid H)\times P(H)$$

> $$P(H \cap D) = P(H \mid D)\times P(D)$$

> $$\therefore P(H \mid D)\times P(D) = P(D \mid H)\times P(H)$$

> $$\therefore P(H \mid D) = \\{\\{P(D \mid H)\times P(H)\\}\over P(D)\\}\ \ \ \ \rightarrow\ \ \ Bayes\ Theorem$$

The first statement demostrates a property known as _commutativity_, where an operator (in this case $$\cap$$) applied to the second term results in the same outcome as if it was the second term operating on the first. Additionally, this theorem is only applicable when

> $$P(D) \neq 0$$

We can now apply some terminology to the theorem:

> $$P(H)\ \ \ \ \rightarrow\ \ \ Prior$$

> $$P(H \mid D)\ \ \ \ \rightarrow\ \ \ Posterior$$

> $$P(D \mid H)\ \ \ \ \rightarrow\ \ \ Likelihood$$

> $$P(D)\ \ \ \ \rightarrow\ \ \ Normalising\ Factor$$

As one might notice, a little bit of new terminology has been brought up: the *likelihood* and the *normalising factor*. The likelihood 
simply refers to the probability that we will make observation $$D$$ assuming that we are correct about our hypothesis $$H$$.
The normalising factor ensures the final calculated value is within the range 0-1.

# The Monty Hall Problem

## Introduction

Originally from a late 20th century game show, the Monty Hall problem is a staple probability problem, which may initially seem unituitive, but is very interesting to analyse. Consider the following scenario: the show host, named Monty Hall, presents you with 3 doors, two of which are empty (or have 'goats' behind them) while the last door has a car. Obviously, your goal is to pick the door with the car to keep it, but you don't know which door it's behind. 

First, Monty instructs you to make your initial choice; you pick any door of your choice. Monty then proceeds to open another door, where he reveals one of the two goats. You are then presented with the option to either remain with your first choice, the first door you picked, or you may alternatively swtich to the other remaining closed door. 

The most interesting part is trying to determine the probability of finding the car in the other door. Intuitively, one might assume the probability is 50/50, however, as can be proven using Bayes Theorem, this is actually not the case. This problem actually stirred up much controversy after its conception between world class mathematicians, but it's now widely accepted. 

## Manual Approach 

Before any programming, one should solve it behind to better understand the mechanics behind any solutions using programming. 

### Modeling the Problem

First and foremost, one must model the problem such that we can apply the theorem. In this example we'll modeling as such: $$C$$ represents picking the correct door with the car behind it, while $$G_1, G_2$$ will represent getting the first/second goat (empty door). It's worth mentioning that spliting both goats into individual elements is very much deliberate despite perhaps seeming trivial. If we were to keep either goat as just one event, it would involve symmetry in the problem, which will make it significantly more difficult to compute. $$D_1, D_2, D_3$$ will represent Monty opening the first/second/third door (respectively). 

> $$ \{C, G_1, G_2, D_1, D_2, D_3\} \in \sum$$

Now we can set up a scenario, in order to make it easier for us to digest. Let's imagine the following: 
- We pick the first door 
- Monty opens the second door 

We can now define the problem as such: 

> $$ P(C \mid D_2)\ \ \ \ vs\ \ \ \ P(\overline{C} \mid D_2)$$

The first expression addresses the probability that our first choice is right, given that Monty has opened the second door, and the second expression addresses the probability the car is not behind the door that we picked, and is therefore in the other door. If the value of the first expression is greater than the second, we should keep our choice and stay on our door, whereas if the value of the second expression is greater, we should switch doors. 

All we need to find is $$ P(C \mid D_2) $$ because we know that $$ P(C \mid D_2) + P( \overline C \mid D_2) = 1$$.

### Applying Bayes Theorem 

Having modeled the situation appropriately, we can now proceed to solve the problem (manually). Firstly, in terms of Bayes Theorem: 

> $$ P(C \mid D_2) = \\{\\{P(D_2 \mid C)\times P(C)}\over P(D_2)} $$

We should also establish priors: 

> $$C = {1\over3},\ G_1 = {1\over3},\ G_2 = {1\over3} $$

Now we can compute everything. In this case, the likelihood is the probability that Monty will open the second door ($$D_2$$), *given that* we have picked the right door on our first try and the car is behind the door we chose (given $$C$$). This means both $$D_2$$ and $$D_3$$ will have goats, so Monty has an equal chance of picking either door; therefore the likelihood is $$1\over2$$.

The prior must be $$1\over3$$ because there are three doors and the car could be behind any of them, so $$P(C) = {1\over3}$$

Calculating the normalising factor directly in this example is a little bit complicated, but done manually it can be broken down to make it easier. We can break $$ P(D_2) $$ down into the following: 

> $$ P(D_2) = P(D_2 \cap C) + P(D_2 \cap \overline{C}) $$

> $$ = P(D_2 \cap C) + P(D_2 \cap C_2) + P(D_2 \cap C_3) $$

For the purpose of this example, we're breaking $$\overline C$$ into $$C_2$$ and $$C_3$$, which represent the car being behind the second and third door, respectively. This is done to make things easier to calculate. 

Keeping in mind what was explained above, these can then be further broken down like so: 

> $$ P(D_2 \cap C) = P(D_2 \mid C) \times P(C) $$

> $$ P(D_2 \cap C_2) = P(D_2 \mid C_2) \times P(C_2) $$

> $$ P(D_2 \cap C_3) = P(D_2 \mid C_3) \times P(C_3) $$

For the first expression, we know that $$P(D_2 \mid C)$$ is $$1\over2$$ because if we pick the first door and correctly guess that it has the car behind it, Monty may open either the second or third door because they will both have goats. We also know that $$P(C)$$ is $$1\over3$$ as it is one of our priors, therefore we are left with a final value of $$1\over6$$

Taking a look at the second expression, we can deduce the value of $$P(D_2 \mid C_2)$$ by thinking about the situation: what is the chance Monty will open the second door if the car is behind the second door? 0, as Monty will never reveal the door with the car behind it. Therefore the value for the second expression is left at 0. 

Looking at the third and last expression, we can deduce the value of $$P(D_2 \mid C_3)$$ will be 1 because if the car is behind the third door, and Monty must not reveal the car, and we've picked the first door, Monty has no choice but to open the second door to reveal a goat. This is multiplied by $$1\over3$$ which is the initial probability of the car being behind the third door. This leaves us with a final value of $$1\over3$$. 

Now, adding all these values togehter, we find that: 

> $$P (D_2) = {1\over2}$$

We now have all the values we need, and can substitute everything into the formula: 

> $$ P(C \mid D_2) = \\{\\{1\over2} \times {1\over3}\over{1\over2}} = {1\over3}$$

> $$ P(\overline{C} \mid D_2) = 1 - {1\over3} = {2\over3} $$

> $$ \therefore\ \ P(\overline{C} \mid D_2)\ \ >\ \ P(C \mid D_2) $$

Seeing as this is the case, according to probability theory, switching doors is the best strategy. 

## Naive Monte Carlo Approach 

Monte Carlo [methods](https://en.wikipedia.org/wiki/Monte_Carlo_method) are a very large class of algorithms designed to deduce probability by relying on repeatedly random sampling and drawing a numerical result. This approach can be applied to our problem, where we run the Monty Carlo problem scenario numerous times, and always stick to one of the two strategies and then we can compare the number of wins to the losses. 

~~~javascript
// language: javascript

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// keep track of how many times each strategy wins
let keepWins = 0;
let switchWins = 0;

// run the scenario 10000 times, and always keep the first door choice 
for (let i = 0; i < 10000; i++) {
    let doors = [1, 2, 3];
    // getRandomInt(3) will return 0, 1 or 2
    const car = doors[getRandomInt(3)];
    const ourChoice = doors[getRandomInt(3)];
    // Monty can't pick our door or the car, so remove those options
    doors.splice(doors.indexOf(car), 1);
    doors.splice(doors.indexOf(ourChoice), 1);
    // There is now only one door left, which is the one Monty will open
    const montyChoice = doors[0];

    // we're keeping, so if our first choice is also the car, we win
    if (ourChoice == car) {
        keepWins++;
    }

    // let's imagine the other scenario, where we always swtich 

    // we have to change our choice to be the door monty hasn't picked 
    doors = [1, 2, 3]
    doors.splice(doors.indexOf(ourChoice), 1);
    doors.splice(doors.indexOf(montyChoice), 1);
    const newChoice = doors[0];

    if (newChoice == car) {
        switchWins++;
    }
}

console.log("Scenario run 10,000 times");
console.log(`Wins when keeping: ${keepWins}`);
console.log(`Wins when switching doors: ${switchWins}`);
console.log(`Rough probability of winning when keeping every time: ${keepWins / 10000}`);
~~~

In the code above, the scenario is run 10,000 times in total; 10,000 where we keep our first door choice every time, and 10,000 where we switch doors every time. As can be seen by the results, this supports our calculated probabilities: if you switch your chances of winning are actually higher. 

## Using WebPPL 

Instead of using a brute force algorithm like the one used above, which was an incredibly inefficent approach, we can use a [probabilistic programming](https://en.wikipedia.org/wiki/Probabilistic_programming) language (known as PPLs) which have built-in inference algorithms under the hood so we can deal with probability problems much more effeciently. There are lots of PPLs, but in this case we are using [WebPPL](https://webppl.readthedocs.io/en/master/).

### No WLOG argument

Here is one possible approach, which doesn't resort to any "without loss of generality" argument. 

~~~
var MontyHall = function () {
  var car = randomInteger({n: 3})
  var our_choice = randomInteger({n: 3})
  var all_doors_but = function (d1, d2) {
    return filter(function(d){return d != d1 & d != d2 }, [0,1,2])
  }
  var monty = categorical({vs: all_doors_but(car, our_choice)})
  var door_not_opened = all_doors_but(monty, our_choice)[0]

  return car == door_not_opened ? "change wins": "keep wins"
}

viz(Infer(MontyHall))
~~~

In this code, we pick a random door for the car and for our choice, and then Monty picks whichever door is neither the car nor our choice. We then find which door hasn't been opened and if the car is behind the unopened door, a change strategy would've won, whereas if not, keeping would've won. This is similar to the example in javascript above, except that we avoid repeating 20,000 times, using an inference algorithm built into the PPL (`Infer()` - [read more](https://webppl.readthedocs.io/en/master/inference/index.html))

### WLOG

In an alternative solution, we can modify the program slightly to be without loss of generality ([WLOG](https://en.wikipedia.org/wiki/Without_loss_of_generality)), where we assume we always pick the first door and Monty always opens the second. This is useful to do because in larger, more complex problems, it can be very difficult to solve the most general version of the problem (as has been done above). Instead, what is done, is a particular scenario is picked (in this case that we pick the first door and Monty the second), and the results of this scenario can accurately be extrapolated to the more general version of the problem. 

~~~
var MontyHall = function () {
  var car = randomInteger({n: 3})
  var our_choice = randomInteger({n: 3})
  var monty = categorical({vs: filter(
    function(d){return d != car & d != our_choice }, [0,1,2])})
  
  condition((our_choice == 0) & (monty == 1))
  return car == 2 ? "change wins": "keep wins"
}

viz(Infer(MontyHall))
~~~

# Citation & Credit

J. L. Nina Matos (2020, July 25). *Bayesian Machine Learning*. Retrieved <span class="date"></span> from https://bayesian-ml.netlify.app/

---
This was written by me, Joao Lucas Nina Matos, you can read more about me on my [website](https://joao-lucas.com). Additionally, much credit must also be given to Younesse Kaddar, who acted as my tutor for this project; a truly great one at that. He also has [his own website](https://younesse.net).

You can also find the repository for this project [on github](https://github.com/JoaoNM/Bayesian-ML).

# Useful References

- [Webppl.org](http://webppl.org): online editor for WebPPL
- [WebPPL documentation](http://webppl.readthedocs.io/en/master/)
- [WebPPL dev Google Group](https://groups.google.com/forum/?utm_medium=email&utm_source=footer#!forum/webppl-dev): Public forum for discussing issues with WebPPL
- [WebPPL-viz](http://probmods.github.io/webppl-viz/): A summary of the vizualization options in WebPPL
- [RWebPPL](https://github.com/mhtess/rwebppl): use WebPPL with R
- WebPPL [packages](http://webppl.readthedocs.io/en/dev/packages.html) (e.g. csv, json, fs).
- [Bayesian Data Analysis using Probabilistic Programs](https://mhtess.github.io/bdappl/) 
- [BDA of Bayesian language models](http://www.problang.org/chapters/app-04-BDA.html)
- [Probabilistic Models of Cognition](http://probmods.org/): An introduction to computational cognitive science and the probabilistic programming language WebPPL
- [Probabilistic Language Understanding](http://problang.org): An introduction to probabilistic models of language (in particular, the Rational Speech Act theory)
