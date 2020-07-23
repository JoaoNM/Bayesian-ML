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
                    <h2>Basic Probability Notation</h2>
                    <h3>Getting Started</h3>
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
                    In any particular scenario all possible outcomes are in the <TeX inline>{String.raw`\Omega`}</TeX> (capital <i>omega</i>) set. This is also known as the <i>probability space</i>. If we build on the aforementioned example, 
                    we may have three possible outcomes: <TeX inline>{String.raw`A`}</TeX>, <TeX inline>{String.raw`B`}</TeX> and <TeX inline>{String.raw`C`}</TeX> (all <i>elements</i> of <TeX inline>{String.raw`\Omega`}</TeX>).
                    <br/><br/><TeX block>{String.raw`\therefore \Omega = \{A, B, C\}`}</TeX><br/>
                    Another thing to note, is that <TeX inline>{String.raw`P\ (\Omega)`}</TeX> must always be <TeX inline>{String.raw`=1`}</TeX> (any event that occurs is part of <TeX inline>{String.raw`\Omega`}</TeX> therefore <TeX inline>{String.raw`P\ (\Omega)`}</TeX> is inherently certain).
                    <br/><br/>
                    The next worth knowing about is the <TeX inline>{String.raw`\sum`}</TeX> (capital <i>sigma</i>) set, also known as the sigma-field. It is the <i>power set</i> of <TeX inline>{String.raw`\Omega`}</TeX>; the sigma-field refers to the subsets of a particular 
                    probability space used to mathematically define probability (<a href="https://www.thoughtco.com/sigma-field-3126572">read more here</a>). 
                    </p>                    
                    <h2>Monty Hall Problem</h2>
                </div>
            </div>
        </div>
    )
}