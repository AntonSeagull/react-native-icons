

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RxDividerVertical = (props: IconProps) => {

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
          <Path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

