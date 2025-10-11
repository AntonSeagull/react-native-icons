

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RxSquare = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 15 15"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M1 1H1.5H13.5H14V1.5V13.5V14H13.5H1.5H1V13.5V1.5V1ZM2 2V13H13V2H2Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

