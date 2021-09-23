// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import cx from 'classnames';
// Common components
import Link from 'components/common/route-link';
// Styles
import './hydros.scss';
import CmpInput from 'components/common/input';

export default function Hydros(props) {

    const cmpClasses = cx(
        'route-hydros',
    )

    const [enzyme, setEnzyme] = useState({
        a: '',
        b: '',
        c: '',
        d: '',
        e: ''

        // a: 0.0,
        // b: 0.0,
        // c: 0.0,
        // d: 0.0,
        // e: 0.0

        // a: 17.45,
        // b: 14.96,
        // c: 17.17,
        // d: 18.09,
        // e: 16.48
        // e: 0.0,
    })
    const [suggest, setSuggest] = useState({
        a: 0.0,
        b: 0.0,
        c: 0.0,
        d: 0.0,
        e: 0.0
    })


    const [realTotal, setRealTotal] = useState(0.0);
    const [realOutput, setRealOutput] = useState(0.0);

    const [total, setTotal] = useState(0.0);
    const [output, setOutput] = useState(0.0);
    const [missing, setMissing] = useState(0.0);

    const [target, setTarget] = useState(83.5);


    useEffect(() => {
        calculate();
    }, [])

    useEffect(() => {
        calculate();
    }, [enzyme, target])


    function handleChange(e) {
        const { name, value } = e.target;
        console.log('handleChange', name, value);
        // value = value.replace(/\D/g,'');
        setEnzyme(enzyme => ({ ...enzyme, [name]: value }));
    }

    function suggestChange(e) {
        const { name, value } = e.target;
        // console.log('handleChange', name, value);
        // setEnzyme(enzyme => ({ ...enzyme, [name]: value }));
    }

    function onTargetChange(e) {
        const { name, value } = e.target;
        console.log('handleChange', name, value);
        // value = value.replace(/\D/g,'');
        setTarget(value);
    }


    function calculate() {
        console.log('calculate', enzyme);
        let _total = 0;
        let _count = 0;
        // let _target = 83;
        let _missing = 0;
        let realOut = 0;

        if (enzyme.a > 0) { _total += Number(enzyme.a); _count += 1; }
        if (enzyme.b > 0) { _total += Number(enzyme.b); _count += 1; }
        if (enzyme.c > 0) { _total += Number(enzyme.c); _count += 1; }
        if (enzyme.d > 0) { _total += Number(enzyme.d); _count += 1; }
        if (enzyme.e > 0) { _total += Number(enzyme.e); _count += 1; }

        if (_count > 0) {
            // realOut = _total / _count;
            realOut = _total / 5;
        }

        setRealTotal(_total);
        setRealOutput(realOut);

        if (_total < target) {
            _missing = target - _total;
            console.log('missing', _missing);
        }
        setMissing(_missing);

        let split = (_count === 0 ? _missing / 5 : _missing / (5 - _count)).toFixed(2);
        console.log('split', split);
        console.log('_missing', _missing);
        console.log('_count', _count);
        let _suggest = {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
        }

        if (enzyme.a == 0) { _suggest.a = split; }
        if (enzyme.b == 0) { _suggest.b = split; }
        if (enzyme.c == 0) { _suggest.c = split; }
        if (enzyme.d == 0) { _suggest.d = split; }
        if (enzyme.e == 0) { _suggest.e = split; }

        setSuggest(_suggest);

        setOutput((_total + _missing) / 5);
        setTotal(_total + _missing);
    }

    function handleResetInput() {
        setEnzyme({
            a: '',
            b: '',
            c: '',
            d: '',
            e: ''
        })
    }

    return (
        <div className={cmpClasses}>
            <div className="overlay full-height">
                <div className="flex-column full-height">

                    <div className="grid">
                        <div className="group">
                            <h3> Hydro Calculator </h3>
                        </div>
                        <div className="group">
                            <label> Target </label>
                            <input type="number" name="target" value={target} onChange={onTargetChange} />
                        </div>
                        <div className="group">

                        </div>
                        <div className="group">

                        </div>
                        <div className="group">

                        </div>

                        <div className="group center">
                            <label>   </label>
                            <button onClick={handleResetInput}> Reset </button>
                        </div>
                    </div>



                    <div className="grid">
                        <div className="group">
                            <h3> Input </h3>
                            <p> Your Elements </p>
                        </div>
                        <div className="group">
                            <label> Element A </label>
                            <input type="number" name="a" value={enzyme.a} onChange={handleChange} />
                        </div>
                        <div className="group">
                            <label> Element B </label>
                            <input type="number" name="b" value={enzyme.b} onChange={handleChange} />
                        </div>
                        <div className="group">
                            <label> Element C </label>
                            <input type="number" name="c" value={enzyme.c} onChange={handleChange} />
                        </div>
                        <div className="group">
                            <label> Element D </label>
                            <input type="number" name="d" value={enzyme.d} onChange={handleChange} />
                        </div>
                        <div className="group">
                            <label> Element E </label>
                            <input type="number" name="e" value={enzyme.e} onChange={handleChange} />
                        </div>

                    </div>
                    <div className="grid">
                        <div className="group">
                            <h3> Input total </h3>
                        </div>
                        <div className="group">
                            <p> Input total: </p>
                            <p className={realTotal >= target ? 'green' : 'red'}> <b> {realTotal.toFixed(2)} </b> </p>
                        </div>
                        <div className="group">
                            <p> Input Average: </p>
                            <p className={realTotal >= target ? 'green' : 'red'}>  <b> {realOutput.toFixed(2)}% </b></p>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="group">
                            <h3> Missing </h3>
                        </div>
                        <div className="group">
                            <p> Missing total</p>
                            <p> {missing.toFixed(2)} </p>
                        </div>
                        {/* <div className="group">
                            <p> Missing total %</p>
                            <p> {missing.toFixed(2)} </p>
                        </div> */}

                    </div>


                    <div className="grid">
                        <div className="group">
                            <h3> Suggested </h3>
                            <p> Missing Elements </p>
                        </div>
                        <div className="group">
                            <label> Element A </label>
                            <input className={suggest.a > 0 ? 'red' : ''} type="number" name="a" value={suggest.a} onChange={suggestChange} />
                        </div>
                        <div className="group">
                            <label> Element B </label>
                            <input className={suggest.b > 0 ? 'red' : ''} type="number" name="b" value={suggest.b} onChange={suggestChange} />
                        </div>
                        <div className="group">
                            <label> Element C </label>
                            <input className={suggest.c > 0 ? 'red' : ''} type="number" name="c" value={suggest.c} onChange={suggestChange} />
                        </div>
                        <div className="group">
                            <label> Element D </label>
                            <input className={suggest.d > 0 ? 'red' : ''} type="number" name="d" value={suggest.d} onChange={suggestChange} />
                        </div>
                        <div className="group">
                            <label> Element E </label>
                            <input className={suggest.e > 0 ? 'red' : ''} type="number" name="e" value={suggest.e} onChange={suggestChange} />
                        </div>
                    </div>

                    <br />



                    <div className="grid">
                        <div className="group">
                            <h2> Output </h2>
                        </div>

                        <div className="group">
                            <p> Total Value</p>
                            <p className={realTotal >= target ? 'green' : 'orange'}> <b> {total.toFixed(2)} </b> </p>
                        </div>

                        <div className="group">
                            <p> Total Average</p>
                            <p className={realTotal >= target ? 'green' : 'orange'}>  <b> {output.toFixed(2)}% </b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}