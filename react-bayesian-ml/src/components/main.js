import React from 'react';
import '../styles/main.css';
import TeX from '@matejmazur/react-katex';

export default function Main() {
    const text = `\\int_0^\infty x^2 dx`;

    return (
        <div className="BayesMLPage">
            <div className="pageMainLayout">
                <div className="pageHeadLayout">
                    <h1 className="title">Bayesian <span>Machine Learning</span></h1>
                </div>
                <div className="bayesMLMain">
                    <h1>Bayesian Probabilities: An Introduction</h1>
                    <p>
                    Bayesian probability is a field within the larger field of <a href="https://en.wikipedia.org/wiki/Bayesian_statistics">Bayesian statistics</a> where 
                    probability is expressed as a degree of certainty that a particular event will take place. The particular difference in Bayesian probability 
                    compared to <a href="https://en.wikipedia.org/wiki/Frequentist_probability">frequentist probability</a> (the more well known approach) 
                    is that when calculating probabilities with Bayesian models, we can update our probabilites when a particular event occurs. In more intuitive terms, 
                    when we have an event, and we want to calculate its probability, intuitively, we will try to factor in different variables that may affect the likelihood 
                    of that event happening; when one of these variables may change, our initial probability may also therefore change - Bayesian models help us do this 
                    mathematically. This is best put by some <a href="https://www.stat.auckland.ac.nz/~brewer/stats331.pdf">great lecture notes</a> I found on Bayesian statistics:
                    <br/><br/>
                    <b>"When we get new information, we should update our probabilities to take the new information into account. Bayesian methods tell us exactly how to do this."</b>
                    </p>
                    <h2>Basic Notation & Terminology</h2>
                    <h3>Notation</h3>
                    <p>
                    There is some basic terminology and notation worth keeping in mind for this project. Firstly, when refereing to the probability 
                    of a certain event occuring, it will be expressed as <TeX inline>{String.raw`P\ (A)`}</TeX> where <TeX inline>{String.raw`A`}</TeX> is the event.
                    The probability of <TeX inline>{String.raw`A`}</TeX> not happening is therefore expressed as <TeX inline>{String.raw`P\ (\overline{A})`}</TeX> (this is the complement of the set <TeX inline>{String.raw`A`}</TeX>, in other words, anything but <TeX inline>{String.raw`A`}</TeX>)
                    <br/><br/><TeX block>{String.raw`P\ (A) = 1 - P\ (\overline{A})`}</TeX><br/>
                    If you're curious about the proof for this expression, here's an <a href="https://www.thoughtco.com/prove-the-complement-rule-3126554">article</a> on it. 
                    <br/><br/>
                    It is also worth noting that probabilities are expressed as sets; using the example above, <TeX inline>{String.raw`A`}</TeX> is a particular set. 
                    Therefore, if there are two events (<TeX inline>{String.raw`A`}</TeX> and <TeX inline>{String.raw`B`}</TeX>), the probability of <i>either event</i> happening can be expressed as:
                    <br/><br/><TeX block>{String.raw`P\ (A \sqcup B) = P\ (A) + P\ (B)`}</TeX><br/>
                    The probability of both happening would be the <i>intersection</i> of both events; the intersection of both <i>sets</i>. This is expressed as such:
                    <br/><br/><TeX block>{String.raw`P\ (A \cap B)`}</TeX><br/>
                    The probability of <TeX inline>{String.raw`A`}</TeX> happening <i>given that</i> <TeX inline>{String.raw`B`}</TeX> has occured, is expressed like so:
                    <br/><br/><TeX block>{String.raw`P\ (A \mid B)`}</TeX><br/>
                    In any particular scenario all possible outcomes are in the <TeX inline>{String.raw`\Omega`}</TeX> (capital <i>omega</i>) set. This is also known as the <i>probability space</i>. If we build on the aforementioned example, 
                    we may have three possible outcomes: <TeX inline>{String.raw`A`}</TeX>, <TeX inline>{String.raw`B`}</TeX> and <TeX inline>{String.raw`C`}</TeX> (all <i>elements</i> of <TeX inline>{String.raw`\Omega`}</TeX>).
                    <br/><br/><TeX block>{String.raw`\therefore \Omega = \{A, B, C\}`}</TeX><br/>
                    Another thing to note, is that <TeX inline>{String.raw`P\ (\Omega)`}</TeX> must always be <TeX inline>{String.raw`=1`}</TeX> (any event that occurs is part of <TeX inline>{String.raw`\Omega`}</TeX> therefore <TeX inline>{String.raw`P\ (\Omega)`}</TeX> is inherently certain).
                    <br/><br/>
                    <TeX inline>{String.raw`\sum`}</TeX> (capital <i>sigma</i>) set, is also known as the sigma-field. It is the <i>power set</i> of <TeX inline>{String.raw`\Omega`}</TeX>; the sigma-field refers to the subsets of a particular 
                    probability space used to mathematically define probability (great article on sigma-field <a href="https://www.thoughtco.com/sigma-field-3126572">here</a>). <b>MORE NEEDED ?</b>
                    <br/><br/><TeX block>{String.raw`\sum = \mathcal{P}(\Omega)`}</TeX><br/>
                    <TeX block>{String.raw`\sum \rightarrow [0,\ 1]`}</TeX><br/>
                    Taking the previous example again, this is what <TeX inline>{String.raw`\sum`}</TeX> would look like:
                    <br/><br/><TeX block>{String.raw`\sum = \{\emptyset, \{A\}, \{B\}, \{C\}, \{A, B\}, \{A, C\}, \{B, C\}, \Omega \}`}</TeX><br/>
                    </p>
                    <h3>Terminology</h3>
                    <p>
                    In Bayesian probability, there are certain terms often used to refer to particular elements in a problem/scenario. Firstly, there are <i>priors</i>, which refer to our probabilities at the start of a problem.
                    There probabilities are the probabilites before any updates or changes have been made (e.g. <TeX inline>{String.raw`P\ (A)`}</TeX>). 
                    <br/><br/>
                    Once these probabilities are updated with new information, using Bayesain models, they become known as <i>postereior</i> probabilities (e.g. <TeX inline>{String.raw`P\ (A \mid B)`}</TeX>).
                    </p>
                    <h2>Bayes Theorem</h2>
                    <p>
                    Bayes Theorem is used to update our prior probabilities with new information, in particular, knowing that a particular event has occured. 
                    This is extremely powerful as most probabilities are dependent on other events occuring.
                    <h3>Important Note</h3> 
                    In typical (basic) textbooks, probability is merely a ratio, and when calculating 
                    the probability of two events <i>both</i> happening (<TeX inline>{String.raw`P\ (A \cap B)`}</TeX>), both probabilities (<TeX inline>{String.raw`P\ (A)`}</TeX> and <TeX inline>{String.raw`P\ (B)`}</TeX>) are multiplied 
                    together; this implicitly assumes that both events are completely independent and the occurence of <TeX inline>{String.raw`B`}</TeX> will not affect <TeX inline>{String.raw`P\ (A)`}</TeX> <i>at all</i>.
                    For example, this might be something like flipping a coin and getting heads, and then rolling a dice and getting six. However, 
                    this typically only happens in text books, and in real world use cases, the occurence of one event affects the probability that the other will also happen. 
                    <br/><br/><TeX block>{String.raw`P\ (A \cap B) = P\ (A \mid B) \times P\ (B)`}</TeX><br/>
                    This is true because we have accounted for the change in <TeX inline>{String.raw`P\ (A)`}</TeX> if <TeX inline>{String.raw`B`}</TeX> has also occured
                    <br/><br/><TeX block>{String.raw`(P\ (A \cap B) = P\ (A) \times P\ (B))`}</TeX><br/>
                    This is only true when the events are completely independent; when: 
                    <br/><br/><TeX block>{String.raw`P\ (A \cap B) = P\ (A)`}</TeX><br/>
                    <h3>Putting It Together</h3>
                    Moving on from A, B and C, we'll now use H, for hypothesis, and D, for data (there is reason to do this). 
                    <br/><br/><TeX block>{String.raw`H : Hypothesis`}</TeX><br/>
                    <TeX block>{String.raw`D : Data`}</TeX><br/>
                    In words, <TeX inline>{String.raw`P\ (H)`}</TeX> is the probability that our hypothesis about a given situation is correct, 
                    and <TeX inline>{String.raw`P\ (D)`}</TeX> is the probability of finding a certain piece of data; making a particular observation for example. 
                    For example we could imagine a medical scenario, where a patient comes in, and our hypothesis is that they have a broken bone 
                    <br/><br/><TeX block>{String.raw`P\ (A \cap B) = P\ (A)`}</TeX><br/>
                    </p>
                    <h2>Monty Hall Problem</h2>
                </div>
            </div>
        </div>
    )
}