

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BsCalendar3EventFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2zM0 14V3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m12-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
        </G>
      </Svg>
    );
  }

