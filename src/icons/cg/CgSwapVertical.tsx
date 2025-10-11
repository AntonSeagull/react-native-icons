

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgSwapVertical = (props: IconProps) => {

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
          <Path d="M12 16H13.5L13.5 10H15.5L15.5 16H17L14.5 19L12 16Z" fill="currentColor" />
          <Path d="M8 8H9.5L9.5 14H11.5L11.5 8H13L10.5 5L8 8Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

