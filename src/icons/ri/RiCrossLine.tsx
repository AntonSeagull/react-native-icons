

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiCrossLine = (props: IconProps) => {

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
          <Path d="M9 2H15V7H20V13H15V22H9V13H4V7H9V2ZM11 4V9H6V11H11V20H13V11H18V9H13V4H11Z" />
        </G>
      </Svg>
    );
  }

