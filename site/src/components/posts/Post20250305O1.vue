<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'

const O_1_SORT = `fn bubble_sort<T: Ord>(array: &mut [T]) {
    let start_time = Instant::now();
    let mut n = array.len();

    if n > 100000000 {
        panic!("No");
    }

    let mut swapped = true;

    while swapped {
        swapped = false;
        for i in 1..n {
            if array[i - 1] > array[i] {
                array.swap(i - 1, i);
                swapped = true;
            }
        }
        n -= 1;
    }

    const TARGET_DURATION: Duration = Duration::from_hours(1);
    let run_time = Instant::now() - start_time;
    if run_time > TARGET_DURATION {
        panic!("No");
    }
    sleep(TARGET_DURATION - run_time);
}
`
</script>

<template>
  <div>
    <div>
      <p>We can sort in O(1) if you just sleep so it always takes the same time.</p>
      <VCodeBlock :code="O_1_SORT" highlightjs lang="rust" theme="neon-bunny-carrot" />
    </div>
  </div>
</template>

<style scoped></style>
