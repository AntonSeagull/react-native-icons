

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiPlayReverseLargeLine = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M16 18.3915V5.60846L5.77359 12L16 18.3915ZM18 3.80421V20.1957C18 20.9812 17.136 21.46 16.47 21.0437L3.3568 12.848C2.73013 12.4563 2.73013 11.5436 3.3568 11.152L16.47 2.95621C17.1361 2.53993 18 3.01878 18 3.80421Z" />
        </G>
      </Svg>
    );
  }

