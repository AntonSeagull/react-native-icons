

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiArrowFromBottom = (props: IconProps) => {

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
          <Path d="M6 18h12v2H6zm6-14.414-6.707 6.707 1.414 1.414L11 7.414V16h2V7.414l4.293 4.293 1.414-1.414z" />
        </G>
      </Svg>
    );
  }

