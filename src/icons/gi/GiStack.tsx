

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiStack = (props: IconProps) => {

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
          <Path d="M256 18.365L50.14 136 256 253.635 461.86 136 256 18.365zm-154 168L50.14 216 256 333.635 461.86 216 410 186.365l-154 88-154-88zm0 80L50.14 296 256 413.635 461.86 296 410 266.365l-154 88-154-88zm0 80L50.14 376 256 493.635 461.86 376 410 346.365l-154 88-154-88z" fill="#000" />
        </G>
      </Svg>
    );
  }

