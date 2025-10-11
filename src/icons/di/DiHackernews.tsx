

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiHackernews = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M25.339 6.166v18.802h-18.802v-18.802h18.802zM27.219 4.286h-22.563v22.563h22.563v-22.563zM18.329 9.868h2.662l-3.755 7.051v4.23h-2.344v-4.23l-3.89-7.051h2.767l2.333 4.912 2.227-4.912z" fill="#444444" />
        </G>
      </Svg>
    );
  }

