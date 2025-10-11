

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiBoltAlt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M11.83 8l-3.826 7.233-0.884-0.467 3.050-5.766h-5.109l4.9-7.279 0.829 0.559-3.851 5.72h4.891z" fill="#000000" />
        </G>
      </Svg>
    );
  }

