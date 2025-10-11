

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiBingSmall = (props: IconProps) => {

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
          <Path d="M13.706 10.918l2.269 4.919 3.352 1.516-12.092 6.361 4.954-4.416v-12.591l-5.102-1.563v18.726l5.071 3.555 12.754-7.597v-5.476z" fill="#444444" />
        </G>
      </Svg>
    );
  }

