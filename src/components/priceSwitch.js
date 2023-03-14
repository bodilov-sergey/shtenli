const priceSwitch = () => {
    [].forEach.call(document.querySelectorAll("form.my-card"), function (form) {
        form.addEventListener("change", function () {
            try {
                let sum = form
                    .querySelector("input[data-price]:checked")
                    .getAttribute("data-price");
                const priceNew = form.querySelector(".price-new");
                const priceOld = form.querySelector(".price-old");
                let numberFrom = Number(
                    typeof priceNew.dataset.from === "undefined"
                        ? 0
                        : priceNew.dataset.from
                );
                let numberTo = Number(sum);
                const time = {
                    start: performance.now(),
                    duration: 1000,
                };
                const tick = function (now) {
                    const progress = Math.min(
                        (now - time.start) / time.duration,
                        1
                    );
                    const easing = Math.pow(progress - 1, 5) + 1;
                    const value = numberFrom + (numberTo - numberFrom) * easing;
                    priceNew.textContent = value.toFixed();
                    priceOld.textContent = Number(
                        value * 1.428571428571429
                    ).toFixed();
                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        priceNew.dataset.from = numberTo.toFixed();
                        priceOld.textContent = Number(
                            numberTo * 1.428571428571429
                        ).toFixed();
                    }
                };
                requestAnimationFrame(tick);
            } catch (e) {
                console.error(e);
            }
        });
        form.dispatchEvent(new Event("change"));
    });
};

export default priceSwitch;
