

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowTopLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13.4747 5.49475L13.4793 7.49475L8.92175 7.50541L18.5253 17.0896L17.1125 18.5052L7.48259 8.89473L7.49339 13.5088L5.49339 13.5134L5.47467 5.51345L13.4747 5.49475Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

