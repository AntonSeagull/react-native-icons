

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBuildingOfficeLight = (props: IconProps) => {

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
          <Path  d="M248,210H230V94h2a6,6,0,0,0,0-12H182V46h2a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12h2V210H24a6,6,0,0,0,0,12H248a6,6,0,0,0,0-12ZM218,94V210H182V94ZM54,46H170V210H142V160a6,6,0,0,0-6-6H88a6,6,0,0,0-6,6v50H54Zm76,164H94V166h36ZM74,80a6,6,0,0,1,6-6H96a6,6,0,0,1,0,12H80A6,6,0,0,1,74,80Zm48,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H128A6,6,0,0,1,122,80ZM80,126a6,6,0,0,1,0-12H96a6,6,0,0,1,0,12Zm42-6a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H128A6,6,0,0,1,122,120Z" />
        </G>
      </Svg>
    );
  }

