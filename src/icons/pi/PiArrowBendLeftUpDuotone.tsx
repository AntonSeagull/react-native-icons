

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowBendLeftUpDuotone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M152,80H56l48-48Z" />
          <Path d="M200,216a88.1,88.1,0,0,1-88-88V88h40a8,8,0,0,0,5.66-13.66l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,56,88H96v40A104.11,104.11,0,0,0,200,232a8,8,0,0,0,0-16ZM104,43.31,132.69,72H75.31Z" />
        </G>
      </Svg>
    );
  }

