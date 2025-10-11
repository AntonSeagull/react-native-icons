

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiChalkboardThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M240,196H228V56a12,12,0,0,0-12-12H40A12,12,0,0,0,28,56V196H16a4,4,0,0,0,0,8H240a4,4,0,0,0,0-8ZM36,56a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4V196H196V168a4,4,0,0,0-4-4H120a4,4,0,0,0-4,4v28H68V84H188v52a4,4,0,0,0,8,0V80a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V196H36ZM188,196H124V172h64Z" />
        </G>
      </Svg>
    );
  }

