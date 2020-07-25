---
layout: default
---

# Bayesian Probabilities: An Introduction

Bayesian probability is a field within the larger field of [Bayesian statistics](https://en.wikipedia.org/wiki/Bayesian_statistics) where 
probability is expressed as a degree of certainty that a particular event will take place. The particular difference in Bayesian probability compared to [frequentist probability](https://en.wikipedia.org/wiki/Frequentist_probability) (the more well known approach) is that when calculating probabilities with Bayesian models, we can update our probabilites when a particular event occurs. In more intuitive terms, when we have an event, and we want to calculate its probability, intuitively, we will try to factor in different variables that may affect the likelihood of that event happening; when one of these variables may change, our initial probability may also therefore change - Bayesian models help us do this mathematically. This is best put by some [great lecture notes](https://www.stat.auckland.ac.nz/~brewer/stats331.pdf) I found on Bayesian statistics:

> "When we get new information, we should update our probabilities to take the new information into account. Bayesian methods tell us exactly how to do this."

## Basic Notation & Terminology

### Notation

There is some basic terminology and notation worth keeping in mind for this project. Firstly, when refereing to the probability of a certain event occuring, it will be expressed as $$P\ (A)$$ where $$A$$ is the event.The probability of $$A$$ not happening is therefore expressed as $$P\ (\overline{A})$$ (this is the complement of the set $$A$$, in other words, anything but $$A$$)

> $$P\ (A) = 1 - P\ (\overline{A})$$

If you're curious about the proof for this expression, here's an [article](https://www.thoughtco.com/prove-the-complement-rule-3126554) on it. It is also worth noting that probabilities are expressed as sets; using the example above, $$A$$ is a particular set. 
Therefore, if there are two events ($$A$$ and $$B$$), the probability of *either event* happening can be expressed as:

> $$P\ (A \sqcup B) = P\ (A) + P\ (B)$$

The probability of both happening would be the *intersection* of both events; the intersection of both *sets*. This is expressed as such:

> $$P\ (A \cap B)$$

The probability of $$A$$ happening *given that* $$B$$ has occured, is expressed like so:

> $$P\ (A \mid B)$$

In any particular scenario all possible outcomes are in the $$\Omega$$ (capital *omega*) set. This is also known as the *probability space*. If we build on the aforementioned example, 
we may have three possible outcomes: $$A$$, $$B$$ and $$C$$ (all *elements* of $$\Omega$$).

> $$\therefore \Omega = \{A, B, C\}$$

Another thing to note, is that $$P\ (\Omega)$$ must always be $$=1$$ (any event that occurs is part of $$\Omega$$ therefore $$P\ (\Omega)$$ is inherently certain).

$$\sum$$ (capital *sigma*) set, is also known as the sigma-field. The sigma-field refers to the subsets of a particular probability space used to mathematically define probability (great article on sigma-field [here](https://www.thoughtco.com/sigma-field-3126572)). $$\sum$$ is a subset of the powerset of $$\Omega$$, and remains closed (stable) under comlpements and countable unions 

> $$\sum \subseteq \mathcal{P}(\Omega)$$

> $$\ A \in \sum,\ \ \overline{A} \in \sum$$

> $$\sum \rightarrow [0,\ 1]$$

Taking the previous example again, this is what $$\sum$$ would look like:

> $$\sum = \{\emptyset, \{A\}, \{B\}, \{C\}, \{A, B\}, \{A, C\}, \{B, C\}, \Omega \}$$

### Terminology
In Bayesian probability, there are certain terms often used to refer to particular elements in a problem/scenario. Firstly, there are *priors*, which refer to our probabilities at the start of a problem. There probabilities are the probabilites before any updates or changes have been made (e.g. $$P\ (A)$$). 

Once these probabilities are updated with new information, using Bayesain models, they become known as *postereior* probabilities (e.g. $$P\ (A \mid B)$$).

## Bayes Theorem

Bayes Theorem is used to update our prior probabilities with new information, in particular, knowing that a particular event has occured. This is extremely powerful as most probabilities are dependent on other events occuring.

### Important Note
In typical (basic) textbooks, probability is merely a ratio, and when calculating the probability of two events *both* happening ($$P\ (A \cap B)$$), both probabilities ($$P\ (A)$$ and $$P\ (B)$$) are multiplied together; this implicitly assumes that both events are completely independent and the occurence of $$B$$ will not affect $$P\ (A)$$ *at all*. For example, this might be something like flipping a coin and getting heads, and then rolling a dice and getting six. However, this typically only happens in text books, and in real world use cases, the occurence of one event affects the probability that the other will also happen. 

> $$P\ (A \cap B) = P\ (A \mid B) \times P\ (B)$$

This is true because we have accounted for the change in $$P\ (A)$$ if $$B$$ has also occured

> $$(P\ (A \cap B) = P\ (A) \times P\ (B))$$

This is only true when the events are completely independent; when: 

> $$P\ (A \cap B) = P\ (A)$$

### Putting It Together 
Moving on from A, B and C, we'll now use H, for hypothesis, and D, for data (there is reason to do this). 

> $$H\ \ \ \ \rightarrow\ \ \ Hypothesis$$

> $$D\ \ \ \ \rightarrow\ \ \ Data$$

> $$D,\ H\in\sum$$

In words, $$P\ (H)$$ is the probability that our hypothesis about a given situation is correct, and $$P\ (D)$$ is the probability of finding a certain piece of data; making a particular observation for example. With this in mind, as well as what has been mentioned above, we can put together the theorem:

> $$P\ (H \cap D) = P\ (D \cap H)$$

> $$P\ (D \cap H) = P\ (D \mid H)\times P\ (H)$$

> $$P\ (H \cap D) = P\ (H \mid D)\times P\ (D)$$

> $$\therefore P\ (H \mid D)\times P\ (D) = P\ (D \mid H)\times P\ (H)$$

> $$\therefore P\ (H \mid D) = \\{\\{P\ (D \mid H)\times P\ (H)\\}\over P\ (D)\\}\ \ \ \ \rightarrow\ \ \ Bayes\ Theorem$$

The first statement demostrates a property known as _commutativity_, where an operator (in this case $$\cap$$) applied to the second term results in the same outcome as if it was the second term operating on the first. Additionally, this theorem is only applicable when

> $$P\ (D) \neq 0$$

We can now apply some terminology to the theorem:

> $$P\ (H)\ \ \ \ \rightarrow\ \ \ Prior$$

> $$P\ (H \mid D)\ \ \ \ \rightarrow\ \ \ Posterior$$

> $$P\ (D \mid H)\ \ \ \ \rightarrow\ \ \ Likelihood$$

> $$P\ (D)\ \ \ \ \rightarrow\ \ \ Normalising\ Factor$$

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

> $$ P\ (C \mid D_2)\ \ \ \ vs\ \ \ \ P\ (\overline{C} \mid D_2)$$

The first expression addresses the probability that our first choice is right, given that Monty has opened the second door, and the second expression addresses the probability the car is not behind the door that we picked, and is therefore in the other door. If the value of the first expression is greater than the second, we should keep our choice and stay on our door, whereas if the value of the second expression is greater, we should switch doors. 

All we need to find is $$ P\ (C \mid D_2) $$ because we know that $$ P\ (C \mid D_2) + P\ ( \overline C \mid D_2) = 1$$.

### Applying Bayes Theorem 

Having modeled the situation appropriately, we can now proceed to solve the problem (manually). Firstly, in terms of Bayes Theorem: 

> $$ P\ (C \mid D_2) = \\{\\{P\ (D_2 \mid C)\times P\ (C)}\over P\ (D_2)} $$

We should also establish priors: 

> $$C = {1\over3},\ G_1 = {1\over3},\ G_2 = {1\over3} $$

Now we can compute everything. In this case, the likelihood is the probability that Monty will open the second door ($$D_2$$), *given that* we have picked the right door on our first try and the car is behind the door we chose (given $$C$$). This means both $$D_2$$ and $$D_3$$ will have goats, so Monty has an equal chance of picking either door; therefore the likelihood is 0.5.

The prior must be $$1\over3$$ because there are three doors and the car could be behind any of them, so $$P\ (C) = {1\over3}$$

Calculating the normalising factor directly in this example is a little bit complicated, but done manually it can be broken down to make it easier. We can break $$ P\ (D_2) $$ down into the following: 

> $$ P\ (D_2) = P\ (D_2 \intersect C) +  $$


---
---
---

# Testing blocks

~~~
// bernoulli(0.6) // same as flip(0.6)
viz(Bernoulli( { p: 0.6 } ) )
~~~

~~~javascript
const helloWorld = "Helo wrld"
console.log(helloWorld);
~~~
**Math?**
$$ P(B \mid A) := \frac{P(B \cap A)}{P(A)} $$
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

# Old stuff
[Note: This course is still being developed. Any feedback would be greatly appreciated and can be sent to `tessler@mit.edu`]


Learning statistics is like learning pottery. With pottery, you can learn how to make different shapes (e.g. a bowl, a vase, a spoon) without understanding general principles. The other way is to learn the basic strokes of forming pottery (e.g. how to mold a curved surface, a flat surface, long pointy things). In this course, we are going to learn the basic strokes of statistics, and compose those strokes to make shapes you've seen before (e.g. a t-test), some shapes you've probably never seen before, and develop ideas how you would make new shapes if you needed to. We won't learn *what tests apply to what data types* but instead foster the ability to reason through data analysis. We will do this through the lens of Bayesian statistics, though the basic ideas will aid your understanding of classical (frequentist) statistics as well.



## Chapters

{% assign sorted_pages = site.pages | sort:"name" %}

{% for p in sorted_pages %}
    {% if p.hidden %}
    {% else %}
        {% if p.layout == 'chapter' %}
1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a>**<br>
        <em>{{ p.description }}</em>
        {% endif %}
    {% endif %}
{% endfor %}

## Appendix

{% assign sorted_pages = site.pages | sort:"name" %}

{% for p in sorted_pages %}
    {% if p.hidden %}
    {% else %}
        {% if p.layout == 'appendix' %}
1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a>**<br>
        <em>{{ p.description }}</em>
        {% endif %}
    {% endif %}
{% endfor %}

## Citation

M. H. Tessler (in prep). *Bayesian data analysis: An introduction using probabilistic programs*. Retrieved <span class="date"></span> from https://mhtess.github.io/bdappl/

## Useful resources

#### WebPPL support and packages

- [webppl.org](http://webppl.org): An online editor for WebPPL
- [WebPPL documentation](http://webppl.readthedocs.io/en/master/)
- [WebPPL dev Google Group](https://groups.google.com/forum/?utm_medium=email&utm_source=footer#!forum/webppl-dev): Public forum for discussing issues with WebPPL
- [WebPPL-viz](http://probmods.github.io/webppl-viz/): A summary of the vizualization options in WebPPL
- [RWebPPL](https://github.com/mhtess/rwebppl): If you would rather use WebPPL within R
- WebPPL [packages](http://webppl.readthedocs.io/en/dev/packages.html) (e.g. csv, json, fs).
- [A WebPPL package with useful BDA helper functions](https://github.com/mhtess/webppl-bda)

#### Basic WebPPL tutorials

- [WebPPL intro from DIPPL](http://dippl.org/chapters/02-webppl.html).
- [WebPPL intro from AgentModels](http://agentmodels.org/chapters/2-webppl.html).

#### Bayesian Data Analysis (using WebPPL)

- [Probabilities and Bayes Rule in WebPPL](http://www.problang.org/chapters/app-01-probability.html) by Michael Franke
- [Comparing methods for computing Bayes Factors](http://michael-franke.github.io/statistics,/modeling/2017/07/07/BF_computation.html) by Michael Franke
- [BDA of Bayesian language models](http://www.problang.org/chapters/app-04-BDA.html)
- [Old BDA course syllabus](http://web.stanford.edu/class/psych201s/) by MH Tessler

#### Other WebPPL applications

- [Probabilistic Models of Cognition](http://probmods.org/): An introduction to computational cognitive science and the probabilistic programming language WebPPL
- [Probabilistic Language Understanding](http://problang.org): An introduction to probabilistic models of language (in particular, the Rational Speech Act theory)
- [Modeling Agents with Probabilistic Programs](http://agentmodels.org): An introduction to formal models of rational agents using WebPPL
- [Forest](http://forestdb.org): A Repository for probabilistic models

### Great textbooks on Bayesian Data Analysis

- [Doing Bayesian Data Analysis](https://sites.google.com/site/doingbayesiandataanalysis/) (Kruschke)
- [Bayesian Data Analysis](http://www.stat.columbia.edu/~gelman/book/) (Gelman)
- [Bayesian Cognitive Modeling](https://bayesmodels.com) (Lee & Wagenmakers)


