

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiEgypt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M21.208 51.973l7.023 407.352 398.925.702 63.636-60.515L326.02 133.443l8.428-9.833c26.455 31.79 72.101 106.86 79.364 93.41 15.243-28.226 13.407-53.944 19.665-80.768l-35.819-72.34-65.317 13.345-77.959-22.475-76.965 24.687z" fill="#000" />
        </G>
      </Svg>
    );
  }

