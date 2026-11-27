
import { animate } from "animejs";

const animations = new WeakMap();

export function animateScores(container = document) {

    container.querySelectorAll('[data-target]').forEach(score => {

        const target = Number(score.dataset.target);

        if (!Number.isFinite(target)) return;

        // 取消之前的動畫，避免重複執行
        animations.get(score)?.cancel();

        // 尊重使用者的減少動畫設定
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
            score.textContent = target.toLocaleString();
            return;
        }

        // 設定初始數值
        const counter = { value: 0 };

        score.textContent = '0';

        // Anime.js 數字動畫
        const animation = animate(counter, {

            value: target,

            duration: 1500,

            ease: 'out(3)',

            onUpdate: () => {
                score.textContent =
                    Math.round(counter.value).toLocaleString();
            },

            onComplete: () => {
                score.textContent = target.toLocaleString();
                animations.delete(score);
            }

        });

        animations.set(score, animation);

    });
}
