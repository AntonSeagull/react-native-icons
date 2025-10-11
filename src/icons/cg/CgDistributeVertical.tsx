

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgDistributeVertical = (props: IconProps) => {

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
          <Path d="M9 11H15V13H9V11Z" />
          <Path d="M19 7H5V5H19V7Z" fill="currentColor" />
          <Path d="M19 19H5V17H19V19Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

