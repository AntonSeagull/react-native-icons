

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgPathOutline = (props: IconProps) => {

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
          <Path d="M5 5H15V9H19V19H9V15H5V5ZM7 7H13V9H9V13H7V7ZM11 17H17V11H15V15H11V17ZM13 11H11V13H13V11Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

